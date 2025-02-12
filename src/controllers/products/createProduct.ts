'use server';

import { Product } from '@prisma/client';

import { ProductCreateData } from '@/components/forms/productConstructorForm/types';
import { prisma } from '@/services/prisma';
import { getCurrentUser } from '@/services/getCurrentUser';

interface Props {
    data: ProductCreateData;
}

export const createProduct = async ({ data }: Props): Promise<Product> => {
    const user = await getCurrentUser();
    if (!user) {
        throw new Error('User not found');
    }
    return prisma.product.create({
        data: {
            title: data.title,
            proteins: data.proteins,
            carbohydrates: data.carbohydrates,
            fats: data.fats,
            userId: user.id
        }
    });
};
