import { FC, useMemo } from 'react';
import { Product } from '@prisma/client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { productItemTexts } from '@/components/productItem/texts';
import { formatNumber } from '@/utils/formatNumber';
import { DeleteButton } from '@/components/deleteButton/DeleteButton';

export const ProductItem: FC<{ product: Product; onItemDelete?: () => Promise<void> }> = ({ product, onItemDelete }) => {
    const calories = useMemo(() => {
        return product.carbohydrates * 4 + product.fats * 9 + product.proteins * 4;
    }, [product]);

    return (
        <Card>
            <CardHeader className="p-4 ">
                <CardTitle className="text-md font-medium flex justify-between items-center">
                    {product.title}
                    {onItemDelete && <DeleteButton productName={product.title} onSubmit={onItemDelete} />}
                </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-0 flex justify-between items-center flex-col">
                <div className="flex justify-between items-center w-full">
                    <div className="grow p-4 flex justify-between border-border border-r">
                        {productItemTexts.carbohydrates}: {formatNumber({ value: product.carbohydrates })}
                    </div>
                    <div className="grow p-4 border-border border-r">
                        {productItemTexts.fats}: {formatNumber({ value: product.fats })}
                    </div>
                    <div className="grow p-4">
                        {productItemTexts.proteins}: {formatNumber({ value: product.proteins })}
                    </div>
                </div>
                <Separator />
                <div className="p-4">
                    {productItemTexts.calories}: {formatNumber({ value: calories })}
                </div>
            </CardContent>
        </Card>
    );
};
