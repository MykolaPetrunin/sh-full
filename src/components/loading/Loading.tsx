'use client';

import { FC } from 'react';
import { LoaderPinwheelIcon } from 'lucide-react';

export const Loading: FC = () => {
    return (
        <div className="grow flex items-center justify-center">
            <LoaderPinwheelIcon className="animate-spin" />
        </div>
    );
};
