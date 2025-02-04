import { clsx } from 'clsx';

import { Separator } from '@/components/ui/separator';
import { ProductsSceleton } from '@/components/skeletons/products/ProductsSceleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProductsLoading() {
    return (
        <div className={clsx('min-h-full flex flex-col-reverse', 'sm:flex-col')}>
            <div className="p-6">
                <Skeleton className="h-10 w-full" />
            </div>
            <Separator />
            <div className="grow relative">
                <ProductsSceleton />
            </div>
        </div>
    );
}
