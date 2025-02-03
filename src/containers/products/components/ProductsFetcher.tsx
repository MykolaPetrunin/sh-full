import { FC } from 'react';

import { getProducts } from '@/controllers/products/getProducts';
import { ProductsList } from '@/components/productsList/ProductsList';
import { EmptyPage } from '@/components/emptyPage/EmptyPage';
import { productsListTexts } from '@/components/productsList/texts';
import { Button } from '@/components/ui/button';

export const ProductsFetcher: FC<{
    cursor?: string;
    limit: number;
    search?: string;
}> = async ({ cursor, search, limit }) => {
    const { products, nextCursor } = await getProducts({ cursor, search: search?.trim(), limit });

    if (products.length === 0 && (!search || search?.trim() === ''))
        return (
            <EmptyPage
                title={productsListTexts.empty.title}
                description={productsListTexts.empty.description}
                actionButton={<Button>{productsListTexts.empty.button}</Button>}
            />
        );
    if (products.length === 0 && search) return <EmptyPage title={productsListTexts.noItems.title} description={productsListTexts.noItems.description} />;

    return <ProductsList products={products} nextCursor={nextCursor} />;
};
