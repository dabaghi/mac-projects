import React from "react";
import "./Header.css";
import logo from "./assets/svgs/logo-header.svg";
import headerSvgLogin from "./assets/svgs/icon-login-binici.svg";
import headerSvgBasket from "./assets/svgs/icon-basket-shop-binici.svg";

function Header() {
  return (
    <>
      <div className="navBarContainer">
        <div className="navBarLeft flex">
          <button className="btnLogin flex">
            <span>عضویت و ورود</span>
            <img
              className="headerSvgLogin"
              src={headerSvgLogin}
              alt="headerSvgLogin"
            />
          </button>

          <button className="btnBasket flex">
            <span className="quantityBasket btnBasketItems">۰</span>
            <span className="btnBasketItems">سبد خرید</span>
            <img
              className="headerSvgBasket btnBasketItems"
              src={headerSvgBasket}
              alt="headerSvgBasket"
            />
          </button>
        </div>
        <div className="navBarRight flex">
          <span className="topMenu">خرید عمده</span>
          <span className="topMenu">آموزش خرید از سایت</span>
          <span className="topMenu">درباره ما</span>
          <span className="topMenu">تماس با ما</span>
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default Header;
