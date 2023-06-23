import React from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import "./Home.css";
import Carousel1 from "../../components/carousel1/Carousel1";
import ProductCards from "../../components/productCards/ProductCards";


function Home() {
  const products = [
    {
      id: 1,
      title: "LUK 5 کیت کلاج ۲۰۶ تیپ",
      price: "۲۵۰۰۰۰۰",
      img: "./assets/images/productimages/luck.jpg"
    },
    {
      id: 2,
      title: "چراغ جلو چپ سمند",
      price: "۱۸۰۰۰۰۰",
      img: "./assets/images/productimages/luck.jpg"
    },
    {
      id: 3,
      title: "چراغ جلو راست پرشيا کروز",
      price: "۷۲۰۰۰۰۰",
      img: "./assets/images/productimages/luck.jpg"
    },
    {
      id: 4,
      title: "چراغ جلو چپ پرشيا کروز",
      price: "۶۹۰۰۰۰۰",
      img: "./assets/images/productimages/luck.jpg"
    },
  ];

  return (
    <body>
      <div className="navBar">
        <Header />
      </div>
      <div className="searchBar">
        <SearchBar />
      </div>
      <Carousel1 />
      <div className="product-list">
            {products.map((item) => (
              <ProductCards
                id={item.id}  
                title={item.title}
                price={item.price}
                img={item.img}
              />
            ))}
          </div>
    </body>
  );
}

export default Home;
