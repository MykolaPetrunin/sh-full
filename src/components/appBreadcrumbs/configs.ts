import { AppBreadcrumbItem } from '@/components/appBreadcrumbs/types';
import { appPaths } from '@/configs/appPaths';
import { appBreadcrumbsTexts } from '@/components/appBreadcrumbs/texts';

export const items: Record<string, AppBreadcrumbItem[]> = {
    [appPaths.meals]: [{ title: appBreadcrumbsTexts.meals, url: appPaths.meals }],
    [appPaths.products]: [{ title: appBreadcrumbsTexts.products, url: appPaths.products }],
    [appPaths.recipes]: [{ title: appBreadcrumbsTexts.recipes, url: appPaths.recipes }]
};
