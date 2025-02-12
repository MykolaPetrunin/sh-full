'use server';

import { FC } from 'react';

import { getProducts } from '@/controllers/products/getProducts';
import { EmptyPage } from '@/components/emptyPage/EmptyPage';
import { productsListTexts } from '@/components/productsList/texts';
import { Button } from '@/components/ui/button';
import { ProductsInfinite } from '@/containers/products/components/ProductsInfinite';
import { ResStatuses } from '@/controllers/types';

export const ProductsData: FC<{
    limit: number;
    search?: string;
}> = async ({ search, limit }) => {
    const { message, data, status } = await getProducts({ search: search?.trim(), limit });

    if (status !== ResStatuses.Success) throw new Error(message);

    if (data!.data.length === 0 && (!search || search?.trim() === ''))
        return (
            <EmptyPage
                title={productsListTexts.empty.title}
                description={productsListTexts.empty.description}
                actionButton={<Button>{productsListTexts.empty.button}</Button>}
            />
        );
    if (data!.data.length === 0 && search) return <EmptyPage title={productsListTexts.noItems.title} description={productsListTexts.noItems.description} />;

    return <ProductsInfinite initProducts={data!.data} initNextCursor={data!.nextCursor} limit={limit} search={search?.trim()} />;
};
