import { FC } from 'react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { InputSkeleton } from '@/components/skeletons/controls/InputSkeleton';

export const ProductConstructorSkeleton: FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <Skeleton className="h-6 w-[30%]" />
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
                <InputSkeleton />
                <InputSkeleton />
                <InputSkeleton />
                <InputSkeleton />
            </CardContent>
            <CardFooter>
                <div className="grid grid-cols-2 gap-3 grow">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                </div>
            </CardFooter>
        </Card>
    );
};
