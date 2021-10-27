import React from "react";
import { HeaderWrapper, Logo } from "./style";
import Navbar from "../Navbar";
import ImgLogo from "../../../assets/images/logo_trans.png"
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderWrapper>
        <div className="row">
          <div className="col-4">
            <Link to="/">
            <Logo> 
              <img src={ImgLogo} alt="" width="50%"/> </Logo></Link>
          </div>

          <div className="col-8">
            <Navbar />
          </div>
        </div>
    </HeaderWrapper>
  );
}

export default Header;
