import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Custom API middleware to run local serverless functions in development
const localApiPlugin = () => ({
  name: 'local-api-plugin',
  configureServer(server: any) {
    server.middlewares.use(async (req: any, res: any, next: any) => {
      if (req.url && req.url.startsWith('/api/')) {
        try {
          const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
          const apiPath = url.pathname;
          // Check if TypeScript or JavaScript file exists
          let filePath = path.resolve(__dirname, `.${apiPath}.ts`);
          if (!fs.existsSync(filePath)) {
            filePath = path.resolve(__dirname, `.${apiPath}.js`);
          }

          if (fs.existsSync(filePath)) {
            // Load the API module using Vite's SSR loading mechanism
            const module = await server.ssrLoadModule(filePath);
            const handler = module.default;

            if (typeof handler === 'function') {
              // Parse body for write methods
              let body = {};
              if (req.method === 'POST' || req.method === 'PATCH' || req.method === 'PUT') {
                body = await new Promise((resolve) => {
                  let data = '';
                  req.on('data', (chunk: any) => { data += chunk; });
                  req.on('end', () => {
                    try {
                      resolve(JSON.parse(data));
                    } catch {
                      resolve({});
                    }
                  });
                });
              }

              // Build mock request/response objects mirroring Vercel's API signature
              const mockReq = Object.assign(req, {
                query: Object.fromEntries(url.searchParams.entries()),
                body,
              });

              const mockRes = {
                statusCode: 200,
                headers: {} as Record<string, string>,
                setHeader(name: string, value: string) {
                  this.headers[name.toLowerCase()] = value;
                  res.setHeader(name, value);
                  return this;
                },
                status(code: number) {
                  this.statusCode = code;
                  res.statusCode = code;
                  return this;
                },
                json(data: any) {
                  if (!res.headersSent) {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                  }
                  return this;
                },
                end(data?: any) {
                  if (!res.headersSent) {
                    res.end(data);
                  }
                  return this;
                }
              };

              await handler(mockReq, mockRes);
              return;
            }
          }
        } catch (err: any) {
          console.error(`Error in local API handler for ${req.url}:`, err);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message || 'Internal Server Error' }));
          }
          return;
        }
      }
      next();
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Allow NEXT_PUBLIC_ prefix for env vars (User Preference)
  envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), localApiPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
