import { z } from 'zod';

import { productConstructorFormTexts } from '@/components/forms/productConstructorForm/texts';

export const productSchema = z.object({
    proteins: z.preprocess(
        (val) => (val === '' ? undefined : Number(val)),
        z.number({ required_error: productConstructorFormTexts.errors.proteins }).nonnegative(productConstructorFormTexts.errors.proteins)
    ),
    carbohydrates: z.preprocess(
        (val) => (val === '' ? undefined : Number(val)),
        z.number({ required_error: productConstructorFormTexts.errors.carbohydrates }).nonnegative(productConstructorFormTexts.errors.carbohydrates)
    ),
    fats: z.preprocess(
        (val) => (val === '' ? undefined : Number(val)),
        z.number({ required_error: productConstructorFormTexts.errors.fats }).nonnegative(productConstructorFormTexts.errors.fats)
    ),
    title: z.string({ required_error: productConstructorFormTexts.errors.title }).min(1, productConstructorFormTexts.errors.title)
});
