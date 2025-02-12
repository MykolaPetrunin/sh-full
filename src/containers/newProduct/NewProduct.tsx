'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { ProductConstructorForm } from '@/components/forms/productConstructorForm/ProductConstructorForm';
import { ProductCreateData } from '@/components/forms/productConstructorForm/types';
import { appPaths } from '@/configs/appPaths';
import { createProduct } from '@/controllers/products/createProduct';

export const NewProduct = () => {
    const router = useRouter();

    const handleCreate = useCallback(
        async (val: ProductCreateData) => {
            await createProduct({ data: val });
            router.push(appPaths.products.general);
        },
        [router]
    );

    return <ProductConstructorForm close={() => router.back()} create={handleCreate} />;
};
