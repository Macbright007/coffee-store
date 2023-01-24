import { createContext, useState, useEffect } from "react";
import { CoffeeDetails } from "../CoffeeDetails";

const CoffeeContext = createContext({});

const getCoffeesFromStorage = () => {
  const selectedCoffees = localStorage.getItem("selectedCoffees");
  const parsedCoffees = selectedCoffees
    ? JSON.parse(selectedCoffees)
    : selectedCoffees;
  return Array.isArray(parsedCoffees) ? parsedCoffees : [];
};

export const CoffeeProvider = ({ children }) => {
  const [addedCoffee, setAddedCoffee] = useState(getCoffeesFromStorage());
  // const [counter, setCounter] = useState(0);

  // function for incrementing counter
  // const counterIncrease = () => {
  //   setCounter(counter + 1);
  // };

  // function for decrementing counter
  // const counterDecrease = () => {
  //   setCounter(counter - 1);
  // };

  // function to add coffee to cart page
  // const addToCart = (coffee) => {
  //   setAddedCoffee((prevState) => [...prevState, coffee]);
  // };

  const addToCart =(coffee)=> {
    const exist = addedCoffee.find(x => x.id === coffee.id);
    if (exist) {
        setAddedCoffee(addedCoffee.map(x => x.id === coffee.id ? {...exist, qty: exist.qty + 1} : x ))
    } else {
        setAddedCoffee([...addedCoffee, {...coffee, qty: 1}]);
    }
}

  useEffect(() => {
    localStorage.setItem("selectedCoffees", JSON.stringify(addedCoffee));
  }, [addedCoffee]);

  // function to remove coffee from cart page
  // const removeFromCart = (coffeeId) => {
  //   setAddedCoffee(addedCoffee.filter((fav) => fav.id !== coffeeId));
  // };
  const removeFromCart =(coffeeId)=> {
    const exist = addedCoffee.find((x) => x.id ===coffeeId);
    if(exist.qty === 1) {
        setAddedCoffee(addedCoffee.filter((x) => x.id !== coffeeId));
    } else {
        setAddedCoffee(addedCoffee.map(x => x.id === coffeeId ? {...exist, qty: exist.qty - 1} : x ))
    }
}

  return (
    <CoffeeContext.Provider
      value={{
        addedCoffee,
        addToCart,
        removeFromCart,
        CoffeeDetails,
        // counter,
        // counterIncrease,
        // counterDecrease,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeContext;
