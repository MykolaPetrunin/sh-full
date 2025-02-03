import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'seeds', 'users.json'), 'utf-8'));

    await prisma.user.create({
        data: users
    });

    const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'seeds', 'products.json'), 'utf-8'));

    await prisma.product.createMany({
        data: products
    });

    console.log('✅ Seed data inserted successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
