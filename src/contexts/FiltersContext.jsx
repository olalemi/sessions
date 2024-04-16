import { createContext, } from "react";

 const FiltersContext = createContext({
  filters: {
    searchQuery: "",
    category: "",
    sort: "asc",
  },
  setFilters: () => {},
 });

export default FiltersContext;