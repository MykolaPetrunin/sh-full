'use client';

import { useRouter } from 'next/navigation';
import { FC, useCallback } from 'react';
import { Product } from '@prisma/client';
import { toast } from 'sonner';

import { ProductConstructorForm } from '@/components/forms/productConstructorForm/ProductConstructorForm';
import { ProductEditData } from '@/components/forms/productConstructorForm/types';
import { ResStatuses } from '@/controllers/types';
import { revalidateRoute } from '@/services/revalidateRoute/revalidateRoute';
import { appPaths } from '@/configs/appPaths';
import { editProduct } from '@/controllers/products/editProduct';
import { deleteProduct } from '@/controllers/products/deleteProduct';

export const EditProductClient: FC<{ product: Product }> = ({ product }) => {
    const router = useRouter();

    const handleEdit = useCallback(async (val: ProductEditData) => {
        const { status, message } = await editProduct({ data: val });
        if (status !== ResStatuses.Success) {
            toast.error(message, {
                position: 'top-right'
            });
            return;
        }

        await revalidateRoute({ route: appPaths.products.general, type: 'page' });
    }, []);

    const handleItemDelete = useCallback(async () => {
        const { message, status } = await deleteProduct({ product });
        if (status !== ResStatuses.Success) {
            toast.error(message, {
                position: 'top-right'
            });
            return;
        }
        await revalidateRoute({ route: appPaths.products.general });
        router.back();
    }, [product, router]);

    const handleCancel = useCallback((): void => {
        router.back();
    }, [router]);

    return <ProductConstructorForm close={handleCancel} value={product} edit={handleEdit} remove={handleItemDelete} />;
};
