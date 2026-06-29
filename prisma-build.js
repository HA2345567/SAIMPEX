import { spawn } from 'child_process';

// Only set DIRECT_URL fallback if DATABASE_URL is defined in the environment (e.g. on Vercel)
// This avoids setting DIRECT_URL to "undefined" string locally
if (process.env.DATABASE_URL) {
  process.env.DIRECT_URL = process.env.DIRECT_URL || process.env.DATABASE_URL;
}

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
  await run('npx', ['prisma', 'generate']);

  console.log('Pushing database schema...');
  await run('npx', ['prisma', 'db', 'push']);

  console.log('Building frontend assets...');
  await run('npx', ['vite', 'build']);
}

main().catch((err) => {
  console.error('Build failed:', err.message);
  process.exit(1);
});
