import React from "react";
import logo from "../images/Logo.svg";
import { FooterWrapper, InnerFooter, LogoContainer } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <InnerFooter>
        <div className="box">
          <LogoContainer>
            <img src={logo} alt="logo" />
            <h6>CoffeeStore</h6>
          </LogoContainer>
          <p>
            Our coffee is always the way you like it. We don’t make your coffee.
            We make your day. We’re not just a coffee. We’re a lifestyle.
          </p>
        </div>
        <div className="box">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="box">
          <h2>Contact Info</h2>
          <ul>
            <li>+1 635 546 3451, +1 604 500 2000</li>
            <li>robinsonjacks@gmail.com</li>
            <li>petersonotion@gmail.com</li>
            <li>Copper Square, Newyork</li>
          </ul>
        </div>
      </InnerFooter>

      <p className="fp">Designed By Macbright | All Rights Reserved 2023. </p>
    </FooterWrapper>
  );
};

export default Footer;
