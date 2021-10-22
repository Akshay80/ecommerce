import React from 'react';
import { Ul, Input } from './style'

function Navbar () {
  return (
    <Ul>
         <Input className="search-bar" type="text" placeholder="Search"></Input>
      <li className="d-flex">Home</li>
      <li className="d-flex">Categories</li>
      <li className="d-flex">Login/Signup
      </li>
   
    </Ul>
  )
}

export default Navbar;
