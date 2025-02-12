import { z } from 'zod';

import { signUpFormTexts } from '@/components/forms/signUpForm/texts';

export const loginFormSchema = z.object({
    email: z.string().email(signUpFormTexts.inputs.email.error),
    password: z.string()
});
