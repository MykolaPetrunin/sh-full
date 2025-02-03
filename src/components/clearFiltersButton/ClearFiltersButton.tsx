'use client';

import { FC, PropsWithChildren, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';

export const ClearFiltersButton: FC<PropsWithChildren<{ namesToClean: string[] }>> = ({ children, namesToClean }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleCleanFilters = useCallback((): void => {
        const params = new URLSearchParams(searchParams);

        namesToClean.forEach((name) => {
            params.delete(name);
        });

        replace(`${pathname}?${params.toString()}`);
    }, [namesToClean, pathname, replace, searchParams]);

    return <Button onClick={handleCleanFilters}>{children}</Button>;
};
