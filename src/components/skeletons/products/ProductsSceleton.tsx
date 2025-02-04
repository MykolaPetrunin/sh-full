import { FC } from 'react';
import { clsx } from 'clsx';

import { ProductSceleton } from '@/components/skeletons/products/ProductSceleton';

export const ProductsSceleton: FC<{ itemsAmount?: number }> = ({ itemsAmount = 10 }) => {
    return (
        <div className={clsx('p-6 gap-6 flex flex-col-reverse absolute overflow-y-auto inset-0', 'sm:flex-col')}>
            {Array.from({ length: itemsAmount }, (_, index) => (
                <div key={index}>
                    <ProductSceleton />
                </div>
            ))}
        </div>
    );
};
