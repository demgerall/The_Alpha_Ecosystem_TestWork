export type productType = {
    id: number;
    title: string;
    price: number;
    oldPrice?: number;
    description?: string;
    images: Array<string>;
    creationAt?: Date;
    updatedAt?: Date;
    category: { id: number; name: string };
};

export type categoriesType = {
    id: number;
    name: string;
    image: string;
};
