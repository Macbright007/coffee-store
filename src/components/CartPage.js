import React, { useContext } from "react";
import CoffeeContext from "../contexts/CoffeeContext";
import Footer from "./Footer";
import Header from "./Header";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  CartBody,
  CartHead,
  CartImgCont,
  InnerCartBody,
  InnerHead,
} from "./styles";

const CartPage = () => {
  const { addedCoffee } = useContext(CoffeeContext);


  return (
    <div>
      <Header>
        <h4>Cart</h4>
      </Header>
 
      <CartBody>
        <CartHead>
          <InnerHead>
          <th>Products</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
          </InnerHead>
        </CartHead>
        {addedCoffee.map((coffee) => {
          return (
            <InnerCartBody>
              <CartImgCont>
                <img src={coffee.img} alt="coffee" />
              </CartImgCont>
              <td>{coffee.coffee_name}</td>
              <td>${coffee.price}</td>

              <td>
                <span className="left">-</span> 1
                <span className="right">+</span>
              </td>

              <td>$50</td>

              <RiDeleteBinLine className="del" />
            </InnerCartBody>
          );
        })}

        <div className="ending">
          <h3>subtotal</h3>
          <p>$500.00</p>
        </div>

        <button className="btn-btn">
          proceed to checkout
        </button>
      </CartBody>

      <Footer />
    </div>
  );
};

export default CartPage;
