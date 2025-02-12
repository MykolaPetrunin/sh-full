'use client';

import { FC, useCallback, useState, useTransition } from 'react';
import { Product } from '@prisma/client';
import { toast } from 'sonner';

import { ProductsList } from '@/components/productsList/ProductsList';
import { getProducts } from '@/controllers/products/getProducts';
import { ResStatuses } from '@/controllers/types';

export const ProductsInfinite: FC<{
    initProducts: Product[];
    initNextCursor: string | null;
    search?: string;
    limit: number;
}> = ({ initProducts, initNextCursor, search, limit }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [nextCursor, setNextCursor] = useState<string | null>(initNextCursor);
    const [isLoadingMore, startLoadMore] = useTransition();

    const fetchMore = useCallback(
        async () =>
            startLoadMore(async () => {
                if (!nextCursor) return;
                const { message, data, status } = await getProducts({ search, limit, cursor: nextCursor });

                if (status !== ResStatuses.Success) {
                    toast.error(message, {
                        position: 'top-right'
                    });
                    return;
                }
                setNextCursor(data!.nextCursor);
                setProducts((prev) => [...prev, ...data!.data]);
            }),
        [limit, nextCursor, search]
    );

    return <ProductsList products={[...initProducts, ...products]} hasMoreItems={!!nextCursor} isLoadingMore={isLoadingMore} loadMore={fetchMore} />;
};
