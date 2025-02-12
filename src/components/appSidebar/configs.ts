import { CookingPotIcon, ShoppingBagIcon, SoupIcon } from 'lucide-react';

import { MainMenuItem } from '@/components/appSidebar/types';
import { appPaths } from '@/configs/appPaths';
import { appSidebarTexts } from '@/components/appSidebar/texts';

export const menuItems: MainMenuItem[] = [
    {
        title: appSidebarTexts.menuItems.meals,
        url: appPaths.meals,
        Icon: SoupIcon
    },
    {
        title: appSidebarTexts.menuItems.products,
        url: appPaths.products.general,
        Icon: ShoppingBagIcon
    },
    {
        title: appSidebarTexts.menuItems.recipes,
        url: appPaths.recipes,
        Icon: CookingPotIcon
    }
];
