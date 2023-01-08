import { createContext, useState} from "react";
import { CoffeeDetails } from "../CoffeeDetails";

const CoffeeContext = createContext({});


export const CoffeeProvider = ({children}) => {
    const [addedCoffee, setAddedCoffee] = useState([])
    
    const addToCart = (coffee) => {
        setAddedCoffee((prevState) => [...prevState, coffee])
    }
    return (
        <CoffeeContext.Provider value={{addedCoffee,addToCart,CoffeeDetails}}>
            {children}
        </CoffeeContext.Provider>
    )
}

export default CoffeeContext