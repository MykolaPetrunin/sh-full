'use client';

import { FC, useCallback, useState, useTransition } from 'react';
import { Product } from '@prisma/client';

import { ProductsList } from '@/components/productsList/ProductsList';
import { getProducts } from '@/controllers/products/getProducts';

export const ProductsInfinite: FC<{
    initProducts: Product[];
    initNextCursor: string | null;
    search?: string;
    limit: number;
}> = ({ initProducts, initNextCursor, search, limit }) => {
    const [products, setProducts] = useState<Product[]>(initProducts);
    const [nextCursor, setNextCursor] = useState<string | null>(initNextCursor);
    const [isLoadingMore, startLoadMore] = useTransition();

    const fetchMore = useCallback(
        async () =>
            startLoadMore(async () => {
                if (!nextCursor) return;
                const res = await getProducts({ search, limit, cursor: nextCursor });

                setNextCursor(res.nextCursor);
                setProducts((prev) => [...prev, ...res.products]);
            }),
        [limit, nextCursor, search]
    );

    return <ProductsList products={products} hasMoreItems={!!nextCursor} isLoadingMore={isLoadingMore} loadMore={fetchMore} />;
};
