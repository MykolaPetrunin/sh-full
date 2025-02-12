'use server';

import { Product } from '@prisma/client';

import { ProductCreateData } from '@/components/forms/productConstructorForm/types';
import { prisma } from '@/services/prisma';
import { getCurrentUser } from '@/services/getCurrentUser';
import { Res, ResStatuses } from '@/controllers/types';

interface Props {
    data: ProductCreateData;
}

export const createProduct = async ({ data }: Props): Promise<Res<Product>> => {
    const user = await getCurrentUser();
    if (!user) return { status: ResStatuses.Error, message: 'User not found' };

    try {
        return {
            status: ResStatuses.Success,
            data: await prisma.product.create({
                data: {
                    title: data.title,
                    proteins: data.proteins,
                    carbohydrates: data.carbohydrates,
                    fats: data.fats,
                    userId: user.id
                }
            })
        };
    } catch {
        return { status: ResStatuses.Error, message: 'Failed to create product' };
    }
};
