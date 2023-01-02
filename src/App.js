import "./App.css";
import ProductDetailsPage from "./components/ProductDetailsPage";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coffeeProduct/:id" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
