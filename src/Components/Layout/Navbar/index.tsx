import React, { useState } from "react";
import { Ul, Input, Wrapper, StyledButton } from "./style";
import "../../../index.css";
import { Link } from "react-router-dom";
import Cart from "../../../Pages/CartContainer/Cart/Cart";
import { Products } from "../../../Components/ProductList";
import Drawer from "@material-ui/core/Drawer";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";


const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as Products[]);

  const getTotalItems = (items: Products[]) =>
    items.reduce((ack: number, item) => ack, 0);

  const handleAddToCart = (clickedItem: Products) => {
    setCartItems((prev) => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as Products[])
    );
  };

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
        <Wrapper>
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
        </Wrapper>
      </div>
    </Ul>
  );
};

export default Navbar;
