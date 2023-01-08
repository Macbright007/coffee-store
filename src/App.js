import "./App.css";
import ProductDetailsPage from "./components/ProductDetailsPage";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import { CoffeeProvider } from "./contexts/CoffeeContext";

function App() {
  return (
    <div className="App">
      <CoffeeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="coffeeProduct/:id" element={<ProductDetailsPage />} />
        </Routes>
      </CoffeeProvider>
    </div>
  );
}

export default App;
