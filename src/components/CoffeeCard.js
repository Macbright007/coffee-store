import { CoffeeCardCont, CoffeeContents, CoffeeImgCont } from "./styles";
import { Link } from "react-router-dom";
import CoffeeContext from "../contexts/CoffeeContext";
import { useContext } from "react";

const CoffeeCard = ({ coffee }) => {
  const { addToCart } = useContext(CoffeeContext);

  return (
    <CoffeeCardCont key={coffee.id}>
      <Link
        to={`/coffeeProduct/${coffee.id}`}
        style={{ textDecoration: "none" }}
      >
        <CoffeeImgCont>
          <img src={coffee.img} alt="first" />
        </CoffeeImgCont>
      </Link>
      <CoffeeContents>
        <div className="inner_detail">
          <h2>{coffee.coffee_name}</h2>
          <button onClick={() => addToCart(coffee)}>Add to cart</button>
          {/* <button>Add to cart</button> */}
        </div>
        <p>${coffee.price}</p>
      </CoffeeContents>
    </CoffeeCardCont>
  );
};
export default CoffeeCard;
