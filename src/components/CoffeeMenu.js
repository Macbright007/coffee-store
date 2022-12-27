import { CoffeeDetails } from "../CoffeeDetails";
import CoffeeCard from "./CoffeeCard";
import { CoffeeContainer, MenuContainer } from "./styles";

const CoffeeMenu = () => {
  return (
    <MenuContainer>
      <h4>Our Menu</h4>

      <CoffeeContainer>
        {CoffeeDetails.map((coffee) => {
          return <CoffeeCard coffee={coffee} />;
        })}
      </CoffeeContainer>
    </MenuContainer>
  );
};

export default CoffeeMenu;
