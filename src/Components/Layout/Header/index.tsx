import React from "react";
import styled from "styled-components";
import { HeaderWrapper, Logo } from "./style";
import Navbar from "../Navbar";
import ImgLogo from "../../../assets/images/logo_trans.png"
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderWrapper>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Link to="/">
            <Logo> 
              <img src={ImgLogo} alt="" width="60%"/> </Logo></Link>
          </div>

          <div className="col-9">
            <Navbar />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
