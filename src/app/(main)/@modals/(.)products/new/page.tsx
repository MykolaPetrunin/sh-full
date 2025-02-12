import { FC } from 'react';

import { Modal } from '@/components/modal/Modal';
import { NewProduct } from '@/containers/newProduct/NewProduct';

const NewProductPage: FC = () => {
    return (
        <Modal>
            <NewProduct />
        </Modal>
    );
};

export default NewProductPage;
