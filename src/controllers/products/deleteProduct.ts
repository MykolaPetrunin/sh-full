'use server';

import { Product } from '@prisma/client';

import { getCurrentUser } from '@/services/getCurrentUser';
import { Res, ResStatuses } from '@/controllers/types';
import { prisma } from '@/services/prisma';

interface Props {
    product: Product;
}

export const deleteProduct = async ({ product }: Props): Promise<Res> => {
    const currentUser = await getCurrentUser();
    if (!currentUser) return { status: ResStatuses.Error, message: 'User not found' };

    if (currentUser.id !== product.userId)
        return {
            status: ResStatuses.Error,
            message: 'You are not allowed to delete this product'
        };

    try {
        await prisma.product.delete({ where: { id: product.id } });
        return { status: ResStatuses.Success };
    } catch {
        return { status: ResStatuses.Error, message: 'Error deleting product' };
    }
};
