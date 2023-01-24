import React, { useContext } from "react";
import CoffeeContext from "../contexts/CoffeeContext";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from "react-icons/ri";
import { CartWrapper, CartBody, CartImgCont } from "./styles";
import cart from "../images/cart.png"

const CartPage = () => {
  // using context
  const { addedCoffee, removeFromCart, addToCart } = useContext(CoffeeContext);


   //variables
    //acc = accumulator and curr = currentItem
    const totalPrice = addedCoffee.reduce((acc, curr) => acc + curr.price * curr.qty, 0);


  return (
    <CartWrapper>
      <>
        <Header>
          <h4>Cart</h4>
        </Header>

        {addedCoffee.length === 0 ? (
          <div className="empty-cart">
            <img src={cart} className="img-fluid" alt="cart"/>
            <h3>Your cart is empty</h3>
            <p style={{ color: "grey" }}>
              Start shopping to add items to your cart
            </p>
            <Link to="/">Back to homepage</Link>
          </div>
        ) : (
          <>
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
                          <span
                            className="left"
                            onClick={() => removeFromCart(coffee.id)}
                          >
                            -
                          </span>
                          <span className="middle">{coffee.qty}</span>
                          <span
                            className="right"
                            onClick={() => addToCart(coffee)}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td>{coffee.price * coffee.qty}</td>
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
                <h3>Total Price</h3>
                <p>{totalPrice}</p>
              </div>

              <div className="btn__btn">
                <button>proceed to checkout</button>
              </div>
            </div>
          </>
        )}
        <Footer />
      </>
    </CartWrapper>
  );
};

export default CartPage;
