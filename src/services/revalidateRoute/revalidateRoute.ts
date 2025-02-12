'use server';

import { revalidatePath } from 'next/cache';

import { RevalidatePageParams } from '@/services/revalidateRoute/types';

export const revalidateRoute = async ({ route, type = 'page' }: RevalidatePageParams) => {
    revalidatePath(route, type);
};
