import React, { useState } from "react";
import { Ul, Input, Wrapper, StyledButton } from "./style";
import "../../../index.css";
import { Link } from "react-router-dom";
import CartContainer from "../../../Pages/CartContainer/cart.container";

const Navbar = () => {
  
  return (
    <Ul>
      <Input className="search-bar" type="text" placeholder="Search"></Input>
      <div className="dropdown">
        <Link to="/">
          <button className="btn" type="button">
            Home
          </button>
        </Link>
      </div>

      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Login/Signup
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link to="/login" className="dropdown-item" href="#">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="dropdown-item" href="#">
              Signup
            </Link>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <Link to="/contact">
          <button className="btn" type="button">
            Contact
          </button>
        </Link>
      </div>
      <div className="dropdown">
      <Link to="/cart">
          <button className="btn" type="button">
            {/* <CartContainer/> */}
            Cart
          </button>
        </Link>
        {/* <Wrapper>
          <Drawer
            anchor="right"
            open={cartOpen}
            onClose={() => setCartOpen(false)}
          >
            <Cart
              cartItems={cartItems}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
            />
          </Drawer>
          <StyledButton onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color="error">
              <button className="btn d-flex" type="button">
                Cart
                <AddShoppingCartIcon />
              </button>
            </Badge>
          </StyledButton>
        </Wrapper> */}
      </div>
    </Ul>
  );
};

export default Navbar;
