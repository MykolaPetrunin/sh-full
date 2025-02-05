'use client';

import { FC } from 'react';
import { User } from '@prisma/client';
import Link from 'next/link';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    useSidebar
} from '@/components/ui/sidebar';
import { NavUser } from '@/components/navUser/NavUser';
import { menuItems } from '@/components/appSidebar/configs';
import { appSidebarTexts } from '@/components/appSidebar/texts';

export const AppSidebar: FC<{
    user: User;
}> = ({ user }) => {
    const { setOpenMobile, isMobile } = useSidebar();
    const handleItemClick = () => {
        if (!isMobile) return;
        setOpenMobile(false);
    };
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarGroupLabel className="text-md font-medium">{appSidebarTexts.title}</SidebarGroupLabel>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map(({ url, Icon, title }) => (
                                <SidebarMenuItem key={title}>
                                    <SidebarMenuButton asChild onClick={handleItemClick}>
                                        <Link href={url}>
                                            <Icon />
                                            <span>{title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
};
