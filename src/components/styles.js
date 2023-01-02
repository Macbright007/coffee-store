import styled from "styled-components";

// header styling
export const Banner = styled.div`
  height: 80vh;

  // .black__background {
  //   border: 2px solid red;
  //   height: 100%;
  //   width: 100%;
  //   background: rgba(0, 0, 0, 0.445);
  //   // position: fixed;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }
`;

export const Content = styled.div`
  // border:1px solid red;
  width: 100%;
  max-width: 800px;
  margin: 60px auto;
  color: white;
  padding: 5px;

  h4 {
    font-size: 45px;
    font-weight: 800;
    text-align: center;
  }

  p {
    font-size: 20px;
    font-weight: 100;
    text-align: center;
  }

  .btn {
    width: 100%;
    max-width: 150px;
    margin: 40px auto;
  }
  .btn > button {
    width: 100%;
    background: #794e21;
    padding: 10px 16px;
    color: white;
    font-weight: 900;
    border: none;
  }
`;
// navbar styling
export const NavContainer = styled.div`
  // border: 2px solid white;
  padding: 20px;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
export const LogoContainer = styled.div`
  display: flex;

  img {
    height: 30px;
  }
  h6 {
    color: white;
    font-size: 18px;
    font-weight: 900;
  }
`;
export const NavItems = styled.div`
  text-decoration: none;
  margin-top: 3px;

  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    line-height: 24px;
    font-size: 16px;
    text-transform: Uppercase;
    margin-left: 25px;
  }
`;

// About and product detail page styling

export const AboutWrapper = styled.div`
  // border: 2px solid black;
  margin-top: 5rem;

  h3 {
    text-align: center;
    border: 2px solid black;
    width: 10%;
    margin: 3rem auto;
    padding: 5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    // line-height: 42px;
  }
`;
export const InnerWrapper = styled.div`
  // border: 2px solid red;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  // border: 2px solid black;
  width: 45%;
  height: 330px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LeftSideContent = styled.div`
  // border: 2px solid blue;
  width: 480px;

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    color: #333;
  }

  h1 {
    font-weight: 600;
    font-size: 25px;
    color: #794e21;
  }

  .new_p {
    font-weight: 600;
    font-size: 21px;
    color: #8c8c8c;
    margin: 0.5rem 0 2rem;
  }

  span {
    border: 2px solid #333;
    font-weight: 600;
    font-size: 16px;
    padding: 7px;
    color: #333;
  }

  .inner_content {
    // border: 2px solid green;
    width: 220px;
    margin: 2rem 0px;
    display: flex;
    justify-content: space-between;
  }

  .inner_content h2 {
    font-weight: 600;
    font-size: 25px;
    line-height: 27px;
    color: #794e21;
    margin-top: 7px;
  }
  .inner_content > button {
    margin-top: 5px;
    padding: 4px 8px;
    font-weight: 500;
    font-size: 15px;
    // line-height: 23px;
    color: #333;
    text-transform: uppercase;
  }
`;
// Menu styling

export const MenuContainer = styled.div`
  // border: 2px solid red;
  margin-top: 7rem;

  h4 {
    text-align: center;
    border: 2px solid black;
    width: 10%;
    margin: 50px auto;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    // line-height: 42px;
    padding: 5px;
  }
`;

export const CoffeeContainer = styled.div`
  // border: 2px solid blue;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 1000px;
  margin: auto;
  gap: 20px;
`;

// coffee card styling
export const CoffeeCardCont = styled.div`
  border: 2px solid rgba(177, 175, 175, 0.514);
  // width: 300px;
  height: 350px;
  background: #e8e8e8;
`;

export const CoffeeImgCont = styled.div`
  width: 100%;
  height: 70%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CoffeeContents = styled.div`
  /* border: 2px solid blue; */
  margin-top: 10px;
  padding: 7px;

  h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #333;
  }

  p {
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: #794e21;
    margin-top: 7px;
  }
  .pp {
    font-weight: 600;
    font-size: 11px;
    line-height: 14px;
    color: #8c8c8c;
    margin-top: 7px;
  }

  .inner_detail {
    display: flex;
    justify-content: space-between;
  }

  .inner_detail > h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }

  .inner_detail > button {
    padding: 0px 5px;
  }
`;

export const ContactWrapper = styled.div`
  // border: 2px solid black;

  h2 {
    text-align: center;
    border: 2px solid black;
    width: 10%;
    margin: 60px auto;
    padding: 5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    // line-height: 42px;
  }
`;
export const InnerContact = styled.div`
  // border: 2px solid red;
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
`;
export const ContactGrid = styled.div`
  // border: 2px solid blue;
  width: 250px;
  height: 150px;
  padding: 10px;

  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 34px;
    color: #333;
    // text-align:center;
    margin: 5px 0px;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #8c8c8c;
    margin-top: 7px;
  }
`;

// Footer styling

export const FooterWrapper = styled.footer`
  border: 2px solid black;
  background: #794e21;
  margin-top: 5rem;
  padding: 10px;

  .fp {
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    color: #fff;
    margin: 1rem 28rem;
  }
`;
export const InnerFooter = styled.div`
  // border: 2px solid blue;
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  height: 30vh;

  .box {
    // border: 2px solid black;
    color: white;
    padding: 10px;
  }

  .box > p {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin-top: 1rem;
  }
  .box h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
  }

  .box ul {
    margin-top: 1rem;
  }
  .box ul li {
    list-style: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    margin-top: 5px;
  }
`;
