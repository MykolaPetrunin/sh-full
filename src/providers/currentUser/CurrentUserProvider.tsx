'use client';

import { createContext, FC, PropsWithChildren } from 'react';
import { User } from '@prisma/client';

export const CurrentUserContext = createContext<User | null>(null);

export const CurrentUserProvider: FC<
    PropsWithChildren<{
        user: User;
    }>
> = ({ children, user }) => {
    return <CurrentUserContext.Provider value={user}>{children}</CurrentUserContext.Provider>;
};
