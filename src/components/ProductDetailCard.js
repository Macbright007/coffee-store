import React, { useContext } from "react";
import CoffeeContext from "../contexts/CoffeeContext";
import {
  AboutWrapper,
  ImgContainer,
  InnerWrapper,
  LeftSideContent,
} from "./styles";

const ProductDetailCard = ({ coffee }) => {
  const { addToCart } = useContext(CoffeeContext);

  return (
    <AboutWrapper>
      <InnerWrapper>
        <ImgContainer>
          <img src={coffee.img} alt="aboutlogo" />
        </ImgContainer>

        <LeftSideContent>
          <h1>{coffee.coffee_name}</h1>
          <p className="new_p">
            Lorem Ipsum id fugiat nostrud irure ex duis ea quis id quis ad et.
            Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
            tempor enim.
          </p>
          <span>Available</span>
          <div className="inner_content">
            <h2>${coffee.price}</h2>
            <button onClick={() => addToCart(coffee)}>Add to cart</button>
          </div>
        </LeftSideContent>
      </InnerWrapper>
    </AboutWrapper>
  );
};

export default ProductDetailCard;
