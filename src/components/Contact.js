import React from "react";
import { ContactGrid, ContactWrapper, InnerContact } from "./styles";
import { IoMdCall } from "react-icons/io"
import { FiMail } from "react-icons/fi"
import { GrLocation } from "react-icons/gr"
import { AiOutlineClockCircle } from "react-icons/ai"

const Contact = () => {
  return (
    <ContactWrapper>
      <h2>Contact Us</h2>

      <InnerContact>
        <ContactGrid>
          <IoMdCall style={{fontSize: "30px", margin: "5px 0px"}} />
          <h3>Contact Us</h3>
          <p>+1 635 546 3451</p>
          <p>+1 604 500 2000</p>
        </ContactGrid>
        <ContactGrid>
          <AiOutlineClockCircle style={{fontSize: "30px", margin: "5px 0px"}} />
          <h3>Opening Hours</h3>
          <p>Mon - Fri: 8am - 5pm</p>
          <p>Sat - Sun: 10am - 4pm</p>
        </ContactGrid>
        <ContactGrid>
          <FiMail style={{fontSize: "30px", margin: "5px 0px"}} />
          <h3>E-mail</h3>
          <p>robinsonjacks@gmail.com</p>
          <p>pertersonotion@gmail.com</p>
        </ContactGrid>
        <ContactGrid>
          <GrLocation style={{fontSize: "30px", margin: "5px 0px"}} />
          <h3>Address</h3>
          <p>Copper Square, New York</p>
        </ContactGrid>
      </InnerContact>
    </ContactWrapper>
  );
};

export default Contact;
