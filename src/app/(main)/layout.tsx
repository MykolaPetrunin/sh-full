import { FC, PropsWithChildren, ReactNode } from 'react';

import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/appSidebar/AppSidebar';
import { getCurrentUser } from '@/services/getCurrentUser';
import { Separator } from '@/components/ui/separator';
import { AppBreadcrumbs } from '@/components/appBreadcrumbs/AppBreadcrumbs';
import { CurrentUserProvider } from '@/providers/currentUser/CurrentUserProvider';

const MainLayout: FC<
    PropsWithChildren<{
        modals: ReactNode;
    }>
> = async ({ children, modals }) => {
    const currentUser = await getCurrentUser();

    return (
        <CurrentUserProvider user={currentUser!}>
            <SidebarProvider>
                <AppSidebar user={currentUser!} />
                <SidebarInset className="flex flex-col">
                    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 bg-background">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <AppBreadcrumbs />
                    </header>
                    <main className="grow">{children}</main>
                    {modals}
                </SidebarInset>
            </SidebarProvider>
        </CurrentUserProvider>
    );
};

export default MainLayout;
