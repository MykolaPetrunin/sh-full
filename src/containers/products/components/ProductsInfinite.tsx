'use client';

import { FC, useCallback, useContext, useState, useTransition } from 'react';
import { Product } from '@prisma/client';
import { toast } from 'sonner';

import { ProductsList } from '@/components/productsList/ProductsList';
import { getProducts } from '@/controllers/products/getProducts';
import { ResStatuses } from '@/controllers/types';
import { deleteProduct } from '@/controllers/products/deleteProduct';
import { CurrentUserContext } from '@/providers/currentUser/CurrentUserProvider';

export const ProductsInfinite: FC<{
    initProducts: Product[];
    initNextCursor: string | null;
    search?: string;
    limit: number;
}> = ({ initProducts, initNextCursor, search, limit }) => {
    const currentUser = useContext(CurrentUserContext);
    const [products, setProducts] = useState<Product[]>(initProducts);
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

    const handleItemDelete = useCallback(async (product: Product) => {
        const { message, status } = await deleteProduct({ product });
        if (status !== ResStatuses.Success) {
            toast.error(message, {
                position: 'top-right'
            });
            return;
        }
        setProducts((prev) => prev.filter((p) => p.id !== product.id));
        return;
    }, []);

    return (
        <ProductsList
            currentUser={currentUser!}
            onItemDelete={handleItemDelete}
            products={products}
            hasMoreItems={!!nextCursor}
            isLoadingMore={isLoadingMore}
            loadMore={fetchMore}
        />
    );
};
