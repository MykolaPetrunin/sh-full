'use server';

import { Product } from '@prisma/client';

import { prisma } from '@/services/prisma';
import { Res, ResStatuses } from '@/controllers/types';

interface Props {
    productId: string;
}

export const getProductById = async ({ productId }: Props): Promise<Res<Product>> => {
    try {
        const product = await prisma['product'].findUnique({
            where: { id: productId }
        });

        if (!product) return { status: ResStatuses.Error, message: 'Product not found' };

        return { status: ResStatuses.Success, data: product };
    } catch {
        return { status: ResStatuses.Error, message: 'Error getting product' };
    }
};
