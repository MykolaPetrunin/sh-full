import { FC } from 'react';

import { EditProductClient } from '@/containers/editProduct/components/EditProductClient';
import { getProductById } from '@/controllers/products/getProductById';
import { ResStatuses } from '@/controllers/types';

export const EditProduct: FC<{
    productId: string;
}> = async ({ productId }) => {
    const { message, data, status } = await getProductById({ productId });

    if (status !== ResStatuses.Success) throw new Error(message);
    return <EditProductClient product={data!} />;
};
