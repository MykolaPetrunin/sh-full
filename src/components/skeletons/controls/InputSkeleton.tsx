import { FC } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

export const InputSkeleton: FC = () => {
    return (
        <div className="flex flex-col gap-2">
            <div>
                <Skeleton className="h-[1.0625rem] w-[20%]" />
            </div>
            <Skeleton className="h-10 w-full" />
        </div>
    );
};
