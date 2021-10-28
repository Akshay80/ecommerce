import React from "react";
import { Logo } from "../Layout/Header/style";
import Footer from "./FooterContainer";
import ImgLogo from "../../assets/images/logo_trans.png";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Logo className="mt-0">
              <img src={ImgLogo} alt="" width="100%" />{" "}
            </Logo>
            <Footer.Text>
              Fringilla urna porttitor rhoncus dolor purus luctus venenatis
              lectus magna fringilla diam maecenas ultricies mi eget mauris.
            </Footer.Text>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">About Us</Footer.Link>
            <Footer.Link href="#">Policy</Footer.Link>
            <Footer.Link href="#">Returns</Footer.Link>
            <Footer.Link href="#">Terms and Conditions</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Customer Services</Footer.Title>
            <Footer.Link href="#">Payment Methods</Footer.Link>
            <Footer.Link href="#">Money-back Guarantee!</Footer.Link>
            <Footer.Link href="#">Returns</Footer.Link>
            <Footer.Link href="#">Order Enquiry</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>My Account</Footer.Title>
            <Footer.Link href="#">My Cart</Footer.Link>
            <Footer.Link href="#">Order History</Footer.Link>
            <Footer.Link href="#">Track Your Order</Footer.Link>
            <Footer.Link href="#">My Wishlist</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
