'use server';

import { Product } from '@prisma/client';

import { ProductEditData } from '@/components/forms/productConstructorForm/types';
import { prisma } from '@/services/prisma';
import { Res, ResStatuses } from '@/controllers/types';

interface Props {
    data: ProductEditData;
}

export const editProduct = async ({ data }: Props): Promise<Res<Product>> => {
    try {
        return {
            status: ResStatuses.Success,
            data: await prisma.product.update({
                where: { id: data.id },
                data: {
                    title: data.title,
                    proteins: data.proteins,
                    carbohydrates: data.carbohydrates,
                    fats: data.fats
                }
            })
        };
    } catch {
        return { status: ResStatuses.Error, message: 'Failed to create product' };
    }
};
