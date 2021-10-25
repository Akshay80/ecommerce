import React from "react";
import { Ul, Input } from "./style";
import "../../../index.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Ul>
      <Input className="search-bar" type="text" placeholder="Search"></Input>
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Home
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
            <a className="dropdown-item" href="#">
              Login
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Signup
            </a>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <Link to="/contact">
        <button
          className="btn"
          type="button" 
        >
        Contact Us
        </button></Link>
      </div>
    </Ul>
  );
}

export default Navbar;
