import React from "react";
import About from "./About";
import CoffeeMenu from "./CoffeeMenu";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Header title="A Cup Of Coffee For Everyone." text="We Don’t Make Your Coffee, We Make Your Day." />
      <About />
      <Services />
      <CoffeeMenu />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
