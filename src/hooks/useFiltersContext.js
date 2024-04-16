import { useContext } from "react";
import FiltersContext from "../contexts/FiltersContext";

// Custom hook for accessing filter context throughout the application.


const useFiltersContext = () => useContext(FiltersContext);
export default useFiltersContext;
