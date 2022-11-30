import axios from "axios";

export const getProductsApi = async () => {
    const products = await axios.get(`https://6222994f666291106a29f999.mockapi.io/api/v1/products`);
    return products.data;
}
