'use server';

import { FC, Suspense } from 'react';
import { clsx } from 'clsx';

import { SearchInput } from '@/components/searchInput/SearchInput';
import { productsListTexts } from '@/components/productsList/texts';
import { Separator } from '@/components/ui/separator';
import { ProductsFetcher } from '@/containers/products/components/ProductsFetcher';

export const Products: FC<{ searchText: string }> = async ({ searchText }) => {
    return (
        <div className={clsx('min-h-full flex flex-col-reverse', 'sm:flex-col')}>
            <div className="p-6">
                <SearchInput placeholder={productsListTexts.controls.search.placeholder} queryName={'search'} />
            </div>
            <Separator />
            <div className="grow relative">
                <div className="absolute overflow-y-auto inset-0">
                    <Suspense key={searchText} fallback={<div>Loading...</div>}>
                        <ProductsFetcher limit={30} search={searchText} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};
