import Navbar from "./Navbar";
import { Banner, Content } from "./styles";

const Header = ({ children }) => {
  return (
    <Banner className="head">
      {/* <div className="black__background"></div> */}
      <Navbar />
      <Content>
        {children}
      </Content>
    </Banner>
  );
};

export default Header;
