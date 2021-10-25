import React from "react";
import styled from "styled-components";
import { Header, Logo } from "./style";
import Navbar from "./Navbar";
import ImgLogo from "../../assets/Images/logo_trans.png"

function Layout() {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Logo> 
              <img src={ImgLogo} alt="" width="65%"/> </Logo>
          </div>

          <div className="col-9">
            <Navbar />
          </div>
        </div>
      </div>
    </Header>
  );
}

export default Layout;
