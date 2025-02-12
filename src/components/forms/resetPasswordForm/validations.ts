import { z } from 'zod';

import { resetPasswordFormTexts } from '@/components/forms/resetPasswordForm/texts';

export const resetPasswordSchema = z.object({
    email: z.string().email(resetPasswordFormTexts.input.error)
});
