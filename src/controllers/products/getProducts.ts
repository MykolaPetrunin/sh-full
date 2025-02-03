'use server';

import { Product } from '@prisma/client';

import { prisma } from '@/services/prisma';

interface Props {
    cursor?: string;
    limit: number;
    search?: string;
}

export const getProducts = async ({
    cursor,
    limit,
    search
}: Props): Promise<{
    products: Product[];
    nextCursor: string | null;
}> => {
    let cursorObj: { id: string } | undefined = undefined;
    if (cursor) {
        const parsed = JSON.parse(cursor) as { id: string };
        cursorObj = { id: parsed.id };
    }

    const products = await prisma['product'].findMany({
        where: search ? { title: { contains: search, mode: 'insensitive' } } : undefined,
        orderBy: [{ updatedAt: 'desc' }, { id: 'desc' }],
        cursor: cursorObj,
        skip: cursorObj ? 1 : 0,
        take: limit + 1
    });

    let nextCursor: string | null = null;

    if (products.length > limit) {
        const nextItem = products.pop();
        nextCursor = JSON.stringify({ id: nextItem!.id });
    }

    return { products, nextCursor };
};
