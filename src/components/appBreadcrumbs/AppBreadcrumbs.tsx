'use client';

import { FC, Fragment } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { items } from '@/components/appBreadcrumbs/configs';

export const AppBreadcrumbs: FC = () => {
    const pathname = usePathname();

    const data = items[pathname];

    if (!data) return null;

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {data.map(({ url, title }, index) => (
                    <Fragment key={url}>
                        {index === data.length - 1 ? (
                            <BreadcrumbItem>
                                <BreadcrumbPage>{title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        ) : (
                            <>
                                <BreadcrumbItem className="hidden md:block">
                                    <Link href={url}>{title}</Link>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                            </>
                        )}
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};
