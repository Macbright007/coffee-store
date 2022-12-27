import styled from "styled-components";
// header styling
export const Banner = styled.div`
  height: 80vh;
`;

export const Content = styled.div`
  // border:1px solid black;
  width: 100%;
  max-width: 700px;
  margin: 40px auto;
  color: white;
  padding: 5px;

  h4 {
    font-size: 45px;
    font-weight: 800;
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
  //   border: 1px solid black;
  padding: 20px;
  display: flex;
  justify-content: space-around;
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
    font-size: 16px;
    text-transform: Uppercase;
    margin-left: 20px;
  }
`;

// About styling

export const AboutWrapper = styled.div`
  // border: 2px solid black;

  h3 {
    text-align: center;
    border: 2px solid black;
    width: 10%;
    margin: 50px auto;
    padding: 3px 5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    line-height: 42px;
  }
`;
export const InnerWrapper = styled.div`
  // border: 2px solid red;
  width: 100%;
  max-width: 950px;
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
  width: 400px;

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;

    color: #333333;
  }
`;
// Menu styling

export const MenuContainer = styled.div`
  // border: 2px solid red;

  h4 {
    text-align: center;
    border: 2px solid black;
    width: 10%;
    margin: 50px auto;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    line-height: 42px;
    padding: 3px 5px;
  }
`;

export const CoffeeContainer = styled.div`
  /* border: 2px solid blue; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 950px;
  margin: auto;
  gap: 20px;
`;

// coffee card styling
export const CoffeeCardCont = styled.div`
  border: 2px solid rgba(177, 175, 175, 0.514);
  // width: 300px;
  height: 350px;
  background: #e8e8e8;
  // padding: 5px;
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

  p {
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: #794e21;
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
