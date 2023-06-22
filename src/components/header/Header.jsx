import React from "react";
import "./Header.css";
import logo from "./assets/svgs/logo-header.svg";
import headerSvgLogin from "./assets/svgs/icon-login-binici.svg";
import headerSvgBasket from "./assets/svgs/icon-basket-shop-binici.svg";
import telephone from "./assets/svgs/telephone.svg";
import sipaLogo from "./assets/svgs/logo-saipa.svg";
import irankhodroLogo from "./assets/svgs/irankhodro-logo.svg";

function Header() {
  return (
    <>
      <div className="firstNavContainer">
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
      <div className="secondNavContainer">
        <div className="secondNavLeft flex">
          <img className="telephone flex" src={telephone} alt="telephone" />
          <div className="navOrderCallBtn">
            <span>ثبت سفارش تلفنی</span>
            <span className="phone">۰۲۱-۷۴۹۴۶</span>
          </div>
        </div>
        <div className="secondNavRight flex">
          <span className="secondNavBarItems">اخبار و مقالات</span>
          <span className="secondNavBarItems">روغن و لوازم تزئینی خودرو</span>
          <div className="flex">
            <span className="secondNavBarItems">سایپا</span>
            <img className="sipaLogo" src={sipaLogo} alt="" />
          </div>
          <div className="flex">
            <span className="secondNavBarItems">ایرانخودرو</span>
            <img className="irankhodroLogo" src={irankhodroLogo} alt="" />
          </div>
          <span className="secondNavBarItems">صفحه اصلی</span>
        </div>
      </div>
    </>
  );
}

export default Header;
