import { useState } from "react";
import { useQuery } from "react-query";
import { Box, Grid } from "@mui/material";
import ProductCard from "../components/ui/ProductCard";
import ProductDetailsDrawer from "../components/ui/ProductDetailsDrawer";
import { ProductService } from "../api/productservice/ProductService";
import useFiltersContext from "../hooks/useFiltersContext";

function Products() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState("");

  // Extracting filters context which holds the current filtering criteria

  const { filters } = useFiltersContext();

   // Querying products data from the server using filters. Dependent on filter changes.
  //  React-query library for managing server state
  
  const { data, error, isLoading, isError } = useQuery(["products", filters.sort, filters.category],
    () => ProductService.getProducts(filters),
  );

  // Event handler for clicking a product card.

  const handleProductClick = (id) => {
    setDrawerOpen(true);
    setActiveProduct(id);
  };

 // Show loading state if data is being requested  

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </Box>
    );
  if (isError) return <Box>Error: {error.message}</Box>;

  return (
    <Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 1 }}
        sx={{
          width: "100%",
          margin: " 0 auto",
          px: { xs: 5, sm: 10 },
          py: { xs: 10 },
        }}
      >
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </Grid>

      <ProductDetailsDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeProduct={activeProduct}
      />
    </Box>
  );
}

export default Products;
