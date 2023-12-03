import "./Search.css"
import image from "../../assets/Search2.svg"
import React, { useState } from "react";
import { Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Aquí puedes realizar la acción de búsqueda con el valor de 'searchQuery'
    // Por ejemplo, puedes redirigir al usuario a una página de resultados de búsqueda.
    console.log("Búsqueda realizada: " + searchQuery);
  };

  return (
    <div className="search-bar">
      <Input type="text"
        placeholder="Search series or movies"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        prefix={<SearchOutlined />} />
    </div>
  );
}

export default Search;