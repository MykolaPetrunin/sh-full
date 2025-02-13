import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Product } from '@prisma/client';
import { LoaderPinwheelIcon } from 'lucide-react';

import { productSchema } from '@/components/forms/productConstructorForm/validations';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { productConstructorFormTexts } from '@/components/forms/productConstructorForm/texts';
import { Button } from '@/components/ui/button';
import { ProductCreateData, ProductEditData } from '@/components/forms/productConstructorForm/types';
import { DeleteButton } from '@/components/deleteButton/DeleteButton';

export const ProductConstructorForm: FC<{
    value?: Product;
    close: () => void;
    edit?: (val: ProductEditData) => Promise<void>;
    create?: (val: ProductCreateData) => Promise<void>;
    remove?: () => Promise<void>;
}> = ({ value, close, edit, create, remove }) => {
    const form = useForm<z.infer<typeof productSchema>>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            proteins: value?.proteins || 0,
            carbohydrates: value?.carbohydrates || 0,
            fats: value?.fats || 0,
            title: value?.title || ''
        }
    });

    const onSubmit = async (values: z.infer<typeof productSchema>) => {
        if (value && edit) await edit({ ...values, id: value.id });
        if (!value && create) await create(values);

        close();
    };

    return (
        <div className="p-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-9">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between items-center">
                                {value ? productConstructorFormTexts.title.edit : productConstructorFormTexts.title.create}
                                {remove && <DeleteButton productName={value?.title || ''} onSubmit={remove} />}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-6">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{productConstructorFormTexts.inputs.title.label}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={productConstructorFormTexts.inputs.title.placeholder} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="carbohydrates"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{productConstructorFormTexts.inputs.carbohydrates.label}</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder={productConstructorFormTexts.inputs.carbohydrates.placeholder} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="proteins"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{productConstructorFormTexts.inputs.proteins.label}</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder={productConstructorFormTexts.inputs.proteins.placeholder} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="fats"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{productConstructorFormTexts.inputs.fats.label}</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder={productConstructorFormTexts.inputs.fats.placeholder} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                        <CardFooter>
                            <div className="grid grid-cols-2 gap-3 grow">
                                <Button type="button" variant="secondary" className="grow" onClick={close}>
                                    {productConstructorFormTexts.buttons.cancel}
                                </Button>
                                <Button type="submit" className="grow" disabled={form.formState.isSubmitting}>
                                    {form.formState.isSubmitting && <LoaderPinwheelIcon className="animate-spin" />}
                                    {productConstructorFormTexts.buttons.submit[value ? 'edit' : 'create']}
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    );
};
