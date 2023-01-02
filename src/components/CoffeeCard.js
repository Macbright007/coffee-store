import { CoffeeCardCont, CoffeeContents, CoffeeImgCont } from "./styles";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  return (
    <Link to={`/coffeeProduct/${coffee.id}`} style={{ textDecoration: "none" }}>
      <CoffeeCardCont key={coffee.id}>
        <CoffeeImgCont>
          <img src={coffee.img} alt="first" />
        </CoffeeImgCont>

        <CoffeeContents>
          <div className="inner_detail">
            <h2>{coffee.coffee_name}</h2>
            <button>Add to cart</button>
          </div>
          <p>${coffee.price}</p>
        </CoffeeContents>
      </CoffeeCardCont>
    </Link>
  );
};
export default CoffeeCard;
