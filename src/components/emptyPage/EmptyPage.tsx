import { FC, PropsWithChildren, ReactNode } from 'react';
import { clsx } from 'clsx';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const EmptyPage: FC<
    PropsWithChildren<{
        title: string;
        description?: string;
        actionButton?: ReactNode;
        className?: string;
    }>
> = ({ title, actionButton, description, children, className }) => {
    return (
        <div className={clsx(className && className, 'min-h-full flex items-center justify-center p-6')}>
            <Card className={clsx(className && className, 'w-full max-w-[32rem]')}>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    {description && <CardDescription>{description}</CardDescription>}
                </CardHeader>
                {children && <CardContent>{children}</CardContent>}
                {actionButton && <CardFooter>{actionButton}</CardFooter>}
            </Card>
        </div>
    );
};
