import { Product } from '@prisma/client';

export type ProductCreateData = Pick<Product, 'title' | 'fats' | 'carbohydrates' | 'proteins'>;

export type ProductEditData = Pick<Product, 'title' | 'fats' | 'carbohydrates' | 'proteins' | 'id'>;
