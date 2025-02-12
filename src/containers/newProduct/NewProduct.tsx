'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'sonner';

import { ProductConstructorForm } from '@/components/forms/productConstructorForm/ProductConstructorForm';
import { ProductCreateData } from '@/components/forms/productConstructorForm/types';
import { appPaths } from '@/configs/appPaths';
import { createProduct } from '@/controllers/products/createProduct';
import { ResStatuses } from '@/controllers/types';
import { revalidateRoute } from '@/services/revalidateRoute/revalidateRoute';

export const NewProduct = () => {
    const router = useRouter();

    const handleCreate = useCallback(async (val: ProductCreateData) => {
        const { status, message } = await createProduct({ data: val });
        if (status !== ResStatuses.Success) {
            toast.error(message, {
                position: 'top-right'
            });
            return;
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));

        await revalidateRoute({ route: appPaths.products.general });
    }, []);

    const handleCancel = useCallback((): void => {
        router.back();
    }, [router]);

    return <ProductConstructorForm close={handleCancel} create={handleCreate} />;
};
