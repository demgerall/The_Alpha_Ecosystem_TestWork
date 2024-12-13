export { CardList } from './CardList/CardList';
export { Form } from './Form/Form';
export type { FormState } from './Form/Form';

export {
    productsSlice,
    getProducts,
    deleteProductById,
    getProductById,
    createProduct,
} from './CardList/api/ProductsSlice';
export { categoriesSlice, getCategories } from './Form/api/CategoriesSlice';

export { totalSlice, getProductsTotal } from './CardList/api/TotalSlice';
