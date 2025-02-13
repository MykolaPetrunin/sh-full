import { FC, PropsWithChildren } from 'react';

import { Modal } from '@/components/modal/Modal';

const MainLayout: FC<PropsWithChildren> = async ({ children }) => {
    return <Modal>{children}</Modal>;
};

export default MainLayout;
