export const appPaths = {
    home: '/',
    meals: '/meals',
    products: {
        general: '/products',
        new: '/products/new',
        edit: (productId: string) => `/products/${productId}`
    },
    recipes: '/recipes',
    auth: {
        login: '/auth/login',
        setNewPassword: '/auth/set-new-password'
    }
};
