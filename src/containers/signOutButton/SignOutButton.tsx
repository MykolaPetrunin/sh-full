'use client';

import { FC, useCallback, useState } from 'react';
import { LogOut } from 'lucide-react';

import { useSignOut } from '@/containers/auth/hooks/useSignOut';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { signOutButtonText } from '@/containers/signOutButton/texts';

export const SignOutButton: FC = () => {
    const signOut = useSignOut();
    const [loading, setLoading] = useState(false);

    const handleSignOut = useCallback(async () => {
        setLoading(true);
        await signOut();
        setLoading(false);
    }, [signOut]);

    return (
        <DropdownMenuItem disabled={loading} onClick={handleSignOut}>
            <LogOut />
            {signOutButtonText.text}
        </DropdownMenuItem>
    );
};
