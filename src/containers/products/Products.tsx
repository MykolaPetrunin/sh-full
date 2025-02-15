'use server';

import { FC, Suspense } from 'react';
import { clsx } from 'clsx';
import { Plus } from 'lucide-react';
import Link from 'next/link';

import { SearchInput } from '@/components/searchInput/SearchInput';
import { productsListTexts } from '@/components/productsList/texts';
import { Separator } from '@/components/ui/separator';
import { ProductsData } from '@/containers/products/components/ProductsData';
import { ProductsSceleton } from '@/components/skeletons/products/ProductsSceleton';
import { appPaths } from '@/configs/appPaths';

export const Products: FC<{ searchText: string }> = async ({ searchText }) => {
    const renderTimestamp = Date.now();

    return (
        <div className={clsx('min-h-full flex flex-col-reverse', 'sm:flex-col')}>
            <div className="p-6 flex items-center gap-4">
                <SearchInput placeholder={productsListTexts.controls.search.placeholder} queryName={'search'} />
                <Link href={appPaths.products.new} className="shrink-0" passHref prefetch>
                    <Plus />
                </Link>
            </div>
            <Separator />
            <div className="grow relative">
                <Suspense key={searchText + renderTimestamp} fallback={<ProductsSceleton />}>
                    <ProductsData limit={10} search={searchText} />
                </Suspense>
            </div>
        </div>
    );
};
