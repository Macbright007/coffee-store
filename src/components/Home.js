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
      <Header>
        <h4>A Cup Of Coffee For Everyone.</h4>
        <p>We Don’t Make Your Coffee, We Make Your Day.</p>
        <div className="btn">
          <button>VIEW MENU</button>
        </div>
      </Header>
      <About />
      <Services />
      <CoffeeMenu />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
