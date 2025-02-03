import { FC, PropsWithChildren } from 'react';

import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/appSidebar/AppSidebar';
import { getCurrentUser } from '@/services/getCurrentUser';
import { Separator } from '@/components/ui/separator';
import { AppBreadcrumbs } from '@/components/appBreadcrumbs/AppBreadcrumbs';

const MainLayout: FC<PropsWithChildren> = async ({ children }) => {
    const currentUser = await getCurrentUser();

    return (
        <SidebarProvider>
            <AppSidebar user={currentUser!} />
            <SidebarInset className="flex flex-col">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 bg-background">
                    <SidebarTrigger />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <AppBreadcrumbs />
                </header>
                <main className="grow">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default MainLayout;
