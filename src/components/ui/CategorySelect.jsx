import { MenuItem, Select } from "@mui/material";
import useFiltersContext from "../../hooks/useFiltersContext";
import { ProductService } from "../../api/productservice/ProductService";
import { useQuery } from "react-query";

function CategorySelect() {
  const { filters, setFilters } = useFiltersContext();
  const { data, isLoading } = useQuery(["categories"], () =>
    ProductService.getAllCategories(),
  );

  const handleChange = (event) => {
    setFilters({ ...filters, category: event.target.value });
  };
  if (isLoading) return <div>Loading...</div>;

  return (
    <Select
      value={filters.category ?? ""}
      variant="standard"
      displayEmpty
      label="Age"
      placeholder="Category"
      onChange={handleChange}
      sx={{ width: { xs: "100%", md: "140px" } }}
    >
      <MenuItem value="">All categories</MenuItem>
      {data?.map((category) => (
        <MenuItem key={category} value={category}>
          {category}
        </MenuItem>
      ))}
    </Select>
  );
}

export default CategorySelect;
