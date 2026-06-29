import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

// If DATABASE_URL is in the environment (e.g. on Vercel build time),
// write it to the .env file so that Prisma CLI can reliably read it.
if (process.env.DATABASE_URL) {
  try {
    const envPath = path.join(process.cwd(), '.env');
    let envContent = '';
    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf-8');
    }
    
    // Check if DIRECT_URL is already defined in .env
    const hasDirectUrl = envContent.split(/\r?\n/).some(line => line.trim().startsWith('DIRECT_URL'));
    
    if (!hasDirectUrl) {
      const dbUrl = process.env.DATABASE_URL;
      // If DATABASE_URL is quoted, use it directly, otherwise add quotes
      const formattedDbUrl = (dbUrl.startsWith('"') && dbUrl.endsWith('"')) || (dbUrl.startsWith("'") && dbUrl.endsWith("'"))
        ? dbUrl
        : `"${dbUrl}"`;

      envContent += `\nDIRECT_URL=${formattedDbUrl}\n`;
      fs.writeFileSync(envPath, envContent, 'utf-8');
      console.log('Successfully appended DIRECT_URL to .env file for Prisma CLI');
    }
  } catch (err) {
    console.error('Failed to write DIRECT_URL fallback to .env:', err.message);
  }
}

// Detect if we are running under Bun
const isBun = !!process.versions.bun;
const execCmd = isBun ? 'bunx' : 'npx';

console.log(`Using executor: ${execCmd} (isBun: ${isBun})`);

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit', shell: true });
    p.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed: ${cmd} ${args.join(' ')}`));
      }
    });
  });
}

async function main() {
  console.log('Generating Prisma Client...');
  await run(execCmd, ['prisma', 'generate']);

  console.log('Pushing database schema...');
  await run(execCmd, ['prisma', 'db', 'push']);

  console.log('Building frontend assets...');
  await run(execCmd, ['vite', 'build']);
}

main().catch((err) => {
  console.error('Build failed:', err.message);
  process.exit(1);
});
