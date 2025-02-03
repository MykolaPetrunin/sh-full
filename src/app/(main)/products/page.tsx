import { FC } from 'react';

import { Products } from '@/containers/products/Products';

const ProductsPage: FC = async (props: {
    searchParams?: Promise<{
        search?: string;
    }>;
}) => {
    const searchParams = await props.searchParams;

    return <Products searchText={searchParams?.search || ''} />;
};

export default ProductsPage;
