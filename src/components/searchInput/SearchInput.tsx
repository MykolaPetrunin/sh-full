'use client';

import { debounce } from 'lodash';
import { FC, useCallback, ChangeEvent, useEffect, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Input } from '@/components/ui/input';

export const SearchInput: FC<{ placeholder?: string; queryName: string }> = ({ placeholder, queryName }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const debouncedHandleSearch = useMemo(
        () =>
            debounce((value: string): void => {
                const params = new URLSearchParams(searchParams);
                if (value) {
                    params.set(queryName, value);
                } else {
                    params.delete(queryName);
                }
                replace(`${pathname}?${params.toString()}`);
            }, 300),
        [searchParams, queryName, replace, pathname]
    );

    useEffect(() => () => debouncedHandleSearch.cancel(), [debouncedHandleSearch]);

    const handleSearch = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => {
            debouncedHandleSearch(e.target.value);
        },
        [debouncedHandleSearch]
    );

    return <Input placeholder={placeholder} onChange={handleSearch} defaultValue={searchParams.get(queryName)?.toString()} />;
};
