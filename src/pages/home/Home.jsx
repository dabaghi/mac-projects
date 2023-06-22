import React from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import "./Home.css";

function Home() {
  return (
    <body>
      <Header />
      <div className="searchBar">
        <SearchBar />
      </div>
      
    </body>
  );
}

export default Home;
