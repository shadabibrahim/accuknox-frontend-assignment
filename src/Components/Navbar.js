import React, { useState } from "react";
import "./styles.css";
import { UserOutlined } from "@ant-design/icons";
import Search from "antd/es/transfer/search";
import { useAuth } from "../dashboardContext";

function Navbar() {
  const [query, setQuery] = useState("");
  const { setSearchQuery } = useAuth(); // Assume setSearchQuery is provided by the context

  const handleSearch = (value) => {
    setQuery(value);
    setSearchQuery(value);
    // Update the search query in context
  };
  return (
    <div className="nav">
      <div className="heading-container">
        <h3>Home &gt;</h3>
        <h2>Dashboard V2</h2>
      </div>
      <div className="search-bar">
        <Search
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
         
        />
        <div className="profile-logo">
          <UserOutlined />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
