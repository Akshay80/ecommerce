import React from "react";
import { Ul, Input,  Wrapper, StyledButton } from "./style";
import "../../../index.css";
import { Link } from "react-router-dom";
import CartIcon from  '../../../assets/Images/cart.png'
import Cart from "../../../Pages/CartContainer/Cart/Cart";
import { Products } from '../../../Components/ProductList'

import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';


const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as Products[]);

  const getTotalItems = (items: Products[]) =>
  items.reduce((ack: number, item) => ack, 0);

const handleAddToCart = (clickedItem: Products) => {
  setCartItems(prev => {
    // 1. Is the item already added in the cart?
    const isItemInCart = prev.find(item => item.id === clickedItem.id);

    if (isItemInCart) {
      return prev.map(item =>
        item.id === clickedItem.id
          ? { ...item, amount: 1 }
          : item
      );
    }
    // First time the item is added
    return [...prev, { ...clickedItem, amount: 1 }];
  });
};

// const handleRemoveFromCart = (id: number) => {
//   setCartItems(prev =>
//     prev.reduce((ack, item) => {
//       if (item.id === id) {
//         if (item.amount === 1) return ack;
//     }, [] as Products[])
//   );
// };


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
          Categories
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
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
        <Link  to="/contact">
          <button className="btn" type="button">
            Contact
          </button>
        </Link>
      </div>

      {/* <div className="dropdown">
        <Link  className="d-flex align-items-center justify-content-center text-decoration-none" to="/cart">
          
          <button className="btn" type="button">
            Cart
          </button>
          <img src={CartIcon} alt="" width="10%" />
        </Link>
      </div> */}
  <div className="dropdown">
<Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          // removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
        <button className="btn d-flex" type="button">
            Cart
            <AddShoppingCartIcon />
          </button>
  
        </Badge>
      </StyledButton> 
      {/* <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid> */}
    </Wrapper>
    </div>
    </Ul>
  );
}

export default Navbar;
