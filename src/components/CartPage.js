import React, { useContext } from "react";
import CoffeeContext from "../contexts/CoffeeContext";
import Footer from "./Footer";
import Header from "./Header";
import { RiDeleteBinLine } from "react-icons/ri";
import { CartWrapper, CartBody, CartImgCont } from "./styles";

const CartPage = () => {
  const { addedCoffee, removeFromCart } = useContext(CoffeeContext);

  return (
    <CartWrapper>
      <Header>
        <h4>Cart</h4>
      </Header>

      <div className="scroll__bar">
        <CartBody>
          <tr>
            <th>Products</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>

          {addedCoffee.map((coffee) => {
            return (
              <tr>
                <td>
                  <CartImgCont>
                    <img src={coffee.img} alt="coffee" />
                  </CartImgCont>
                </td>
                <td>{coffee.coffee_name}</td>
                <td>${coffee.price}</td>
                <td>
                  <div>
                    <span className="left">-</span> 
                    <span className="middle">1</span> 
                    <span className="right">+</span>
                  </div>
                </td>
                <td>$50</td>
                <td>
                  <RiDeleteBinLine
                    className="del"
                    onClick={() => removeFromCart(coffee.id)}
                  />
                </td>
              </tr>
            );
          })}
        </CartBody>
      </div>

      <div className="total">
        <div className="ending">
          <h3>subtotal</h3>
          <p>$500.00</p>
        </div>

        <div className="btn__btn">
          <button>proceed to checkout</button>
        </div>
      </div>
      <Footer />
    </CartWrapper>
  );
};

export default CartPage;
