import { FC, useCallback, UIEvent } from 'react';
import { Product, User } from '@prisma/client';
import { clsx } from 'clsx';

import { ProductItem } from '@/components/productItem/ProductItem';
import { ProductSceleton } from '@/components/skeletons/products/ProductSceleton';

export const ProductsList: FC<{
    products: Product[];
    currentUser: User;
    hasMoreItems: boolean;
    isLoadingMore: boolean;
    onItemDelete: (product: Product) => Promise<void>;
    loadMore: () => Promise<void>;
}> = ({ products, isLoadingMore, loadMore, hasMoreItems, onItemDelete, currentUser }) => {
    const handleScroll = useCallback(
        async (e: UIEvent<HTMLInputElement>) => {
            if (isLoadingMore || !hasMoreItems) return;
            const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
            if (Math.abs(scrollTop) + clientHeight !== scrollHeight) return;
            await loadMore();
        },
        [hasMoreItems, isLoadingMore, loadMore]
    );

    return (
        <div className={clsx('p-6 gap-6 flex flex-col-reverse absolute overflow-y-auto inset-0', 'sm:flex-col')} onScroll={handleScroll}>
            {products.map((product) => (
                <ProductItem product={product} key={product.id} onItemDelete={currentUser.id === product.userId ? async () => await onItemDelete(product) : undefined} />
            ))}
            {isLoadingMore && (
                <div>
                    <ProductSceleton />
                </div>
            )}
        </div>
    );
};
