import React from "react";
import { ContactGrid, ContactWrapper, InnerContact } from "./styles";

const Contact = () => {
  return (
    <ContactWrapper>
      <h2>Contact Us</h2>

      <InnerContact>
        <ContactGrid>
          <h3>Contact Us</h3>
          <p>+1 635 546 3451</p>
          <p>+1 604 500 2000</p>
        </ContactGrid>
        <ContactGrid>
          <h3>Opening Hours</h3>
          <p>Mon - Fri: 8am - 5pm</p>
          <p>Sat - Sun: 10am - 4pm</p>
        </ContactGrid>
        <ContactGrid>
          <h3>E-mail</h3>
          <p>robinsonjacks@gmail.com</p>
          <p>pertersonotion@gmail.com</p>
        </ContactGrid>
        <ContactGrid>
          <h3>Address</h3>
          <p>Copper Square, New York</p>
        </ContactGrid>
      </InnerContact>
    </ContactWrapper>
  );
};

export default Contact;
