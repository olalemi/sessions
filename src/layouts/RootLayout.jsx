import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";
import FiltersContext from "../contexts/FiltersContext";

const RootLayout = () => {
  const [isNavBarAtTop, setNavBarAtTop] = useState(true);

  const [filters, setFilters] = useState({
    sort: "asc",
    category: "",
    searchQuery: "",
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      <div>
        <div style={{ position: "sticky", top: "0", zIndex: 1 }}>
          <Header
            setNavBarAtTop={setNavBarAtTop}
            isNavBarAtTop={isNavBarAtTop}
          />
        </div>

        <Outlet context={[filters, setFilters]} />
      </div>
    </FiltersContext.Provider>
  );
};

export default RootLayout;
