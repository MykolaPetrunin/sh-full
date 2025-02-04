'use server';

import { FC, Suspense } from 'react';
import { clsx } from 'clsx';

import { SearchInput } from '@/components/searchInput/SearchInput';
import { productsListTexts } from '@/components/productsList/texts';
import { Separator } from '@/components/ui/separator';
import { ProductsData } from '@/containers/products/components/ProductsData';
import { ProductsSceleton } from '@/components/skeletons/products/ProductsSceleton';

export const Products: FC<{ searchText: string }> = async ({ searchText }) => {
    return (
        <div className={clsx('min-h-full flex flex-col-reverse', 'sm:flex-col')}>
            <div className="p-6">
                <SearchInput placeholder={productsListTexts.controls.search.placeholder} queryName={'search'} />
            </div>
            <Separator />
            <div className="grow relative">
                <Suspense key={searchText} fallback={<ProductsSceleton />}>
                    <ProductsData limit={10} search={searchText} />
                </Suspense>
            </div>
        </div>
    );
};
