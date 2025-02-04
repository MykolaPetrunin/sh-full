import { FC } from 'react';

import { getProducts } from '@/controllers/products/getProducts';
import { EmptyPage } from '@/components/emptyPage/EmptyPage';
import { productsListTexts } from '@/components/productsList/texts';
import { Button } from '@/components/ui/button';
import { ProductsInfinite } from '@/containers/products/components/ProductsInfinite';

export const ProductsData: FC<{
    limit: number;
    search?: string;
}> = async ({ search, limit }) => {
    const { products, nextCursor } = await getProducts({ search: search?.trim(), limit });

    if (products.length === 0 && (!search || search?.trim() === ''))
        return (
            <EmptyPage
                title={productsListTexts.empty.title}
                description={productsListTexts.empty.description}
                actionButton={<Button>{productsListTexts.empty.button}</Button>}
            />
        );
    if (products.length === 0 && search) return <EmptyPage title={productsListTexts.noItems.title} description={productsListTexts.noItems.description} />;

    return <ProductsInfinite initProducts={products} initNextCursor={nextCursor} limit={limit} search={search?.trim()} />;
};
