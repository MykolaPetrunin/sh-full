import { AppBreadcrumbItem } from '@/components/appBreadcrumbs/types';
import { appPaths } from '@/configs/appPaths';
import { appBreadcrumbsTexts } from '@/components/appBreadcrumbs/texts';

export const items: Record<string, AppBreadcrumbItem[]> = {
    [appPaths.meals]: [{ title: appBreadcrumbsTexts.meals, url: appPaths.meals }],
    [appPaths.products.general]: [{ title: appBreadcrumbsTexts.products, url: appPaths.products.general }],
    [appPaths.products.new]: [
        { title: appBreadcrumbsTexts.products, url: appPaths.products.general },
        {
            title: appBreadcrumbsTexts.productNew,
            url: appPaths.products.new
        }
    ],
    [appPaths.recipes]: [{ title: appBreadcrumbsTexts.recipes, url: appPaths.recipes }]
};
