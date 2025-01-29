import { cookies } from 'next/headers';
import { User } from '@prisma/client';

import { cookiesUser } from '@/containers/auth/configs';

export const getCurrentUser = async (): Promise<User | undefined> => {
    const currentUser = (await cookies()).get(cookiesUser)?.value;

    return currentUser ? (JSON.parse(currentUser) as User) : undefined;
};
