import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.result.create({
    data: { userId: "test", score: 80, feedback: "Good job!" }
  });
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());