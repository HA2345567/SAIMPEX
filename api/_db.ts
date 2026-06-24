import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

// Helper to manually load .env file if process.env.DATABASE_URL is not set
function loadEnv() {
  if (process.env.DATABASE_URL) return;

  try {
    // Try resolving .env from current folder, parent, grandparent, or root
    let dir = process.cwd();
    for (let i = 0; i < 4; i++) {
      const envPath = path.join(dir, '.env');
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        envContent.split(/\r?\n/).forEach((line) => {
          const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
          if (match) {
            const key = match[1];
            let value = match[2] || '';
            if (value.startsWith('"') && value.endsWith('"')) {
              value = value.slice(1, -1);
            } else if (value.startsWith("'") && value.endsWith("'")) {
              value = value.slice(1, -1);
            }
            process.env[key] = value;
          }
        });
        console.log(`Loaded environment variables from ${envPath}`);
        break;
      }
      const parent = path.dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }
  } catch (err) {
    console.error('Error loading .env file in helper:', err);
  }
}

// Call loadEnv before creating PrismaClient
loadEnv();

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});
