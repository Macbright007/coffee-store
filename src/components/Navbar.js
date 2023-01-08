import logo from "../images/Logo.svg";
import { BsCart3 } from "react-icons/bs";
import { LogoContainer, NavContainer, NavItems } from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CoffeeContext from "../contexts/CoffeeContext";

const Navbar = () => {
  const {addedCoffee} = useContext(CoffeeContext)

  return (
    <NavContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
        <h6>CoffeeStore</h6>
      </LogoContainer>
      <NavItems>
        <Link to="/">Home</Link>
        <a href="#">Menu</a>
        <a href="#">About</a>
        <a href="#">Services</a>
      </NavItems>

      <Link to="/cart/" className="cart">
        <BsCart3 style={{ color: "white", fontSize: "35px" }} />
        <span>{addedCoffee.length}</span>
        {/* <span>0</span> */}
      </Link>
    </NavContainer>
  );
};

export default Navbar;
