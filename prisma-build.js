import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const envPath = path.join(process.cwd(), '.env');
let envContent = '';
if (fs.existsSync(envPath)) {
  envContent = fs.readFileSync(envPath, 'utf-8');
}

const hasDbUrl = envContent.split(/\r?\n/).some(line => line.trim().startsWith('DATABASE_URL'));
const hasDirectUrl = envContent.split(/\r?\n/).some(line => line.trim().startsWith('DIRECT_URL'));

const dbUrlInEnv = process.env.DATABASE_URL;

// Determine if we have a database URL configured
const isDbConfigured = !!(dbUrlInEnv || hasDbUrl);

if (!isDbConfigured) {
  console.log('No database connection URL found in environment or .env file.');
  console.log('Writing dummy database URLs to pass Prisma schema validation during build...');
  
  // Write dummy URLs to .env so validation passes
  if (!hasDbUrl) envContent += `\nDATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"\n`;
  if (!hasDirectUrl) envContent += `\nDIRECT_URL="postgresql://dummy:dummy@localhost:5432/dummy"\n`;
  fs.writeFileSync(envPath, envContent, 'utf-8');
} else {
  // If we have DATABASE_URL but no DIRECT_URL, write it to .env as fallback
  if (!hasDirectUrl && dbUrlInEnv) {
    const formattedDbUrl = (dbUrlInEnv.startsWith('"') && dbUrlInEnv.endsWith('"')) || (dbUrlInEnv.startsWith("'") && dbUrlInEnv.endsWith("'"))
      ? dbUrlInEnv
      : `"${dbUrlInEnv}"`;
    envContent += `\nDIRECT_URL=${formattedDbUrl}\n`;
    fs.writeFileSync(envPath, envContent, 'utf-8');
    console.log('Successfully appended DIRECT_URL to .env file');
  }
}

// Detect if we are running under Bun
const isBun = !!process.versions.bun;
const execCmd = isBun ? 'bunx' : 'npx';

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

  // Only push database schema if we have a real database connection
  if (isDbConfigured) {
    console.log('Pushing database schema...');
    try {
      await run(execCmd, ['prisma', 'db', 'push']);
    } catch (err) {
      console.warn('Database push failed, but continuing build:', err.message);
    }
  } else {
    console.log('Skipping database schema push (no database connection configured).');
  }

  console.log('Building frontend assets...');
  await run(execCmd, ['vite', 'build']);
}

main().catch((err) => {
  console.error('Build failed:', err.message);
  process.exit(1);
});
