import { prisma } from '@/prisma/prisma'; // Sesuaikan dengan path prisma

export async function GET() {
  const products = await prisma.product.findMany();
  return new Response(JSON.stringify(products), { status: 200 });
}

