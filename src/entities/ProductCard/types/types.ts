export type productType = {
    id: number;
    title: string;
    price: number;
    images: Array<string>;
    category: { id: number; name: string };
};
