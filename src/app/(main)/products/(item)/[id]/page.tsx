import { FC } from 'react';

import { EditProduct } from '@/containers/editProduct/EditProduct';

const EditProductsPage: FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
    const productId = (await params).id;

    return <EditProduct productId={productId} />;
};

export default EditProductsPage;
