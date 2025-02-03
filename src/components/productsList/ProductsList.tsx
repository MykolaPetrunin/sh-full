'use client';

import { FC } from 'react';
import { Product } from '@prisma/client';
import { clsx } from 'clsx';

import { ProductItem } from '@/components/productItem/ProductItem';

export const ProductsList: FC<{
    products: Product[];
    nextCursor: string | null;
}> = ({ products }) => {
    return (
        <div className={clsx('p-6 gap-6 flex flex-col-reverse', 'sm:flex-col')}>
            {products.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
        </div>
    );
};
