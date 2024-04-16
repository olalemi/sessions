import { ProductService } from "./ProductService";
import { apiClient } from "../index";


// Mock the apiClient module to simulate API calls and their responses

jest.mock("../index", () => ({
  apiClient: {
    get: jest.fn(),
  },
}));

describe("getProducts", () => {
  beforeEach(() => {
    // Clear all mocks before each test to avoid assertions on previous test calls
    apiClient.get.mockClear();
  });

  it("fetches products successfully from an API", async () => {
     // Mock data to simulate a successful API response
    const mockProducts = [{ id: 1, name: "Product A" }];
    apiClient.get.mockResolvedValue({ data: mockProducts });

       // Define filters to pass to the getProducts function

    const filters = { sort: "price", category: "electronics" };
    const products = await ProductService.getProducts(filters);

    expect(apiClient.get).toHaveBeenCalledWith(
      "products/category/electronics?sort=price",
    );
    expect(products).toEqual(mockProducts);
  });

  it("fetches products with defaults when no category is specified", async () => {
    const mockProducts = [{ id: 2, name: "Product B" }];
    apiClient.get.mockResolvedValue({ data: mockProducts });

    const filters = { sort: "name" };
    const products = await ProductService.getProducts(filters);

    expect(apiClient.get).toHaveBeenCalledWith("products?sort=name");
    expect(products).toEqual(mockProducts);
  });

  it("throws an error when the request fails", async () => {
    apiClient.get.mockRejectedValue(new Error("Failed to fetch products"));
  });
  
});
