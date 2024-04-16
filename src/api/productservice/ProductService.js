import { apiClient } from "../index";

// Retrieves products from the server filtered by category and sorted as specified.

async function getProducts(filters) {
  const { sort, category } = filters;
  try {

// Constructing the API endpoint dynamically based on the provided filters
    const path = `products${category ? `/category/${category}` : ""}?sort=${sort}`;
    const response = await apiClient.get(path);
    return response.data;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return null;
  }
}

// Fetches a single product details from the server.

async function getProduct(id) {
  try {
    const response = await apiClient.get(`products/${id}`);
    return response.data;
  } catch (err) {
    console.error("Failed to fetch product:", err);
    return null;
  }
}
// Retrieves all the product categories from the server.

async function getAllCategories() {
  try {
    const response = await apiClient.get(`products/categories`);
    return response.data;
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    return null;
  }
}

export const ProductService = {
  getProducts,
  getProduct,
  getAllCategories,
};
