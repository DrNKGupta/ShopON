import "./navigation.styles.scss";
import React from "react";

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "./../../assets/logo.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
function Navigation() {
  return (
    <>
      <div className="navBar">
        <div className="sectionOne">
          <Link className="navLinks" to="allProds">
            <h2 className="logo">ShopON</h2>
          </Link>
          <Link className="navLinks" to="allProds">
            Products
          </Link>
          <Link className="navLinks" to="addProd">
            Add Product
          </Link>
        </div>

        <div className="sectionTwo">
          <Link className="navLinks" to="cart">
            <CartIcon />
          </Link>

          <div className="navItem">
            <img
              className="avatar"
              src="https://user-images.githubusercontent.com/98959174/264313331-ef57b249-ef33-4ba7-8c37-a0bd6f1d174e.jpg"
              alt=""
            />
            <p className="name">Nidhish Gupta</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
