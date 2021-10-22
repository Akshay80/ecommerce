import React from "react";
import styled from "styled-components";
import { Header, Logo } from "./style";
import Navbar from "./Navbar";

function Layout() {
  return (
    <Header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Logo> Logo </Logo>
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
