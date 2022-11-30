import { ProductInterface } from "../../types/productTypes";

export type HomeStackParams = {
    Home: undefined;
    ProductDetail: { product: ProductInterface }
}