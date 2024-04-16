import TextField from "@mui/material/TextField";
import { useEffect, useRef } from "react";
import useFiltersContext from "../../hooks/useFiltersContext";

const SearchField = () => {
  const { filters, setFilters } = useFiltersContext();

  const handleInputChange = (event) => {
    setFilters({ ...filters, searchQuery: event.target.value });
  };
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <TextField
      inputRef={inputRef}
      fullWidth
      value={filters.searchQuery}
      onChange={handleInputChange}
      variant="outlined"
      placeholder="Search..."
      sx={{
        width: { sm: "100%", md: "400px" },
        "& .MuiOutlinedInput-root": {
          borderRadius: "50px",
          padding: "2px",
          height: { xs: "30px", sm: "30px", md: "45px" },
        },
      }}
    />
  );
};

SearchField.displayName = "SearchField";

export default SearchField;
