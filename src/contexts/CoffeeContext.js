import { createContext, useState, useEffect } from "react";
import { CoffeeDetails } from "../CoffeeDetails";

const CoffeeContext = createContext({});

const getCoffeesFromStorage = () => {
  const selectedCoffees = localStorage.getItem("selectedCoffees");
  const parsedCoffees = selectedCoffees ? JSON.parse(selectedCoffees) : selectedCoffees;
  return Array.isArray(parsedCoffees) ? parsedCoffees : [];
};

export const CoffeeProvider = ({ children }) => {
  const [addedCoffee, setAddedCoffee] = useState(getCoffeesFromStorage());

  // function to add coffee to cart page
  const addToCart = (coffee) => {
    setAddedCoffee((prevState) => [...prevState, coffee]);
  };

  useEffect(() => {
    localStorage.setItem(
      "selectedCoffees",
      JSON.stringify(addedCoffee)
    );
  }, [addedCoffee])

  // function to remove coffee from cart page
  const removeFromCart = (coffeeId) => {
    setAddedCoffee(addedCoffee.filter((fav) => fav.id !== coffeeId));
  };

  return (
    <CoffeeContext.Provider value={{ addedCoffee, addToCart, removeFromCart, CoffeeDetails }}>
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeContext;
