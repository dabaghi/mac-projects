import React from "react";
import searchLogo from "./assets/5957005_find_look_magnifier_search_zoom_icon.svg";
import "./SearchBar.css";

function SearchBar() {
  return (
    <>
      <div className="searchBarContainer">
        <div className="searchBarLeft flex">
          <span className="item1">جستجو پیشرفته</span>
          <button className="flex">
            <span className="item2">!جستجو کن</span>
            <img className="searchBarLogo" src={searchLogo} alt="searchBarLogo" />
          </button>
        </div>
        <div className="searchBarRight">
          <span className="searchBox">
            <input type="text" placeholder="...جستجو کن" />
          </span>
          <span>دنبال چی میگردی؟</span>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
