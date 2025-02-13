'use client';

import { PageError } from '@/components/errors/PageError';

export default function NewProductsError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <div className="min-h-screen flex">
            <PageError error={error} reset={reset} />
        </div>
    );
}
