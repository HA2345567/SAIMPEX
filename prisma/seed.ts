import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  const seedSqlPath = new URL('../supabase/seed.sql', import.meta.url).pathname;
  // On Windows, the pathname might have a leading slash like /C:/... which fs.readFileSync doesn't like sometimes.
  // We should normalize it.
  const normalizedPath = seedSqlPath.startsWith('/') ? seedSqlPath.substring(1) : seedSqlPath;
  const seedSql = fs.readFileSync(normalizedPath, 'utf8');

  console.log('Seeding database...');
  
  // Split the SQL into individual statements if necessary, 
  // but for a simple seed file, we can try executing it in one go if it doesn't contain multiple BEGIN/COMMIT blocks that conflict.
  // Actually, executeRawUnsafe can handle multiple queries depending on the driver.
  // We'll try to run it as one block.
  
  try {
    await prisma.$executeRawUnsafe(seedSql);
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
