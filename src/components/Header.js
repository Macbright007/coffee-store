import Navbar from "./Navbar";
import { Banner, Content } from "./styles";

const Header = ({ title, text }) => {
  return (
    <Banner className="head">
      {/* <div className="black__background"></div> */}
      <Navbar />
      <Content>
        <h4>{title}</h4>
        <p>{text}</p>
        <div className="btn">
          <button>VIEW MENU</button>
        </div>
      </Content>
    </Banner>
  );
};

export default Header;
