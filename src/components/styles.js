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

  @media (max-width: 950px) {
    h4 {
      font-size: 35px;
    }

    p {
      margin-top: 7px;
      font-size: 23px;
    }

    .btn > button {
      padding: 15px 20px;
      font-size: 18px;
    }
  }
`;
// navbar styling
export const NavContainer = styled.div`
  // border: 2px solid white;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;

  .cart {
    color: black;
    position: relative;
    // border: 2px solid white;
  }
  .cart span {
    position: absolute;
    background: #fff;
    border-radius: 100%;
    padding: 2px 8px;
    font-size: 14px;
    top: -5px;
    font-weight: 900;
    right: -6px;
  }

  // @media (max-width: 950px) {
  //   border: 2px solid white;
  //   position: fixed;
  //   top: 0;
  // }
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

  @media (max-width: 950px) {
    height: 40px;

    h6 {
      font-size: 20px;
    }
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

  @media (max-width: 950px) {
    display: none;
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
    margin: 5rem auto;
    padding: 8px 5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    line-height: 42px;
  }

  @media (max-width: 950px) {
    h3 {
      width: 50%;
      font-size: 25px;
    }
  }
`;
export const InnerWrapper = styled.div`
  // border: 2px solid red;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 950px) {
    flex-direction: column;
  }
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

  @media (max-width: 950px) {
    width: 85%;
    height: 300px;
    margin: auto;
    // border: 2px solid blue;
  }
`;

export const LeftSideContent = styled.div`
  // border: 2px solid blue;
  width: 480px;

  p {
    font-weight: 600;
    font-size: 22px;
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

  @media (max-width: 950px) {
    width: 300px;
    // border: 2px solid blue;
    margin: 30px auto;
    text-align: left;

    p {
      font-size: 20px;
      // color: green;
    }
  }
`;
// Services styling

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
    line-height: 42px;
    padding: 8px 5px;
  }

  @media (max-width: 950px) {
    h4 {
      width: 50%;
      font-size: 23px;
    }
  }
`;

export const CoffeeContainer = styled.div`
  // border: 2px solid blue;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 1200px;
  margin: auto;
  gap: 20px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    max-width: 320px;
    // border: 2px solid blue;
  }
`;

// coffee card styling
export const CoffeeCardCont = styled.div`
  border: 2px solid rgba(177, 175, 175, 0.514);
  // width: 300px;
  height: 370px;
  background: #e8e8e8;

  @media (max-width: 950px) {
    border-radius: 20px;
    // border: 2px solid blue;
  }
`;

export const CoffeeImgCont = styled.div`
  width: 100%;
  height: 70%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 950px) {
    border-radius: 20px;

    img {
      border-radius: 20px;
    }
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
    padding: 3px 5px;
    cursor: pointer;
  }

  @media (max-width: 950px) {
    // border: 2px solid blue;
    padding: 10px;

    h2 {
      font-size: 20px;
      font-weight: 800;
      margin-top: -8px;
    }

    p {
      font-size: 24px;
      // color: red;
    }
    .pp {
      font-size: 15px;
      line-height: 17px;
    }

    .inner_detail > h2 {
      font-size: 20px;
      font-weight: 900;
    }
    .inner_detail > button {
      font-size: 13px;
      font-weight: 900;
      margin-top: -4px;
    }
  }
`;

export const ContactWrapper = styled.div`
  // border: 2px solid black;

  h2 {
    text-align: center;
    border: 2px solid black;
    width: 10%;
    margin: 60px auto;
    padding: 8px 5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    line-height: 42px;
  }

  @media (max-width: 950px) {
    h2 {
      width: 50%;
      font-size: 23px;
    }
  }
`;
export const InnerContact = styled.div`
  // border: 2px solid red;
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 950px) {
    // border: 2px solid black;
    flex-direction: column;
    max-width: 320px;
  }
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

  @media (max-width: 950px) {
    // border: 2px solid red;
    margin: 20px auto;
    text-align: center;

    h3 {
      font-size: 25px;
    }

    p {
      font-size: 20px;
    }
  }
`;

// Footer styling

export const FooterWrapper = styled.footer`
  // border: 2px solid black;
  background: #794e21;
  margin-top: 5rem;
  padding: 10px;

  .fp {
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    color: #fff;
    margin: 1rem 22rem;
  }

  @media (max-width: 950px) {
    height: 100vh;

    .fp {
      font-weight: 500;
      font-size: 18px;
      // background: blue;
      width: 55%;
      margin: 24rem 3rem;
    }
  }
`;
export const InnerFooter = styled.div`
  // border: 2px solid blue;
  width: 100%;
  max-width: 1200px;
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

  @media (max-width: 950px) {
    // border: 2px solid red;
    grid-template-columns: 1fr;
    max-width: 320px;

    // .box{
    //   border: 2px solid white;
    // }
  }
`;

// styling for cartpage
export const CartWrapper = styled.div`
  .empty-cart {
    text-align: center;
    padding-bottom: 20px; 
  }

  .img-fluid {
    // border: 2px solid black;
    width: 40%;
  }

  .empty-cart p {
    margin-bottom: 30px;
  }
  .empty-cart a {
    // border: 2px solid red;
    text-decoration: none;
    background: lightgrey;
    padding: 10px;
    color: gray;
    font-weight: bold;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }
  .empty-cart a:hover {
    background-color: black;
    color: #fff;
  }
  .total {
    margin-top: 8rem;
  }
  .ending {
    // border: 2px solid black;
    width: 100%;
    max-width: 600px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    background: #794e21;
    color: white;
    padding: 7px;
  }

  .ending p, h3 {
    // margin-top: 3px;
    font-size: 27px;
  }

  .btn__btn {
    // border: 2px solid black;
    width: 100%;
    max-width: 600px;
    margin: 2rem auto;
    background: #794e21;
    color: white;
    // padding: 7px;
  }

  .btn__btn button {
    width: 100%;
    height: 100%;
    // background: #794e21;
    padding: 15px;
    cursor: pointer;
    border: none;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
  }

  .btn__btn button:hover {
    background-color: gray;
    color: white;
  }

  @media (max-width: 950px) {
    overflow: hidden;

    .scroll__bar {
      overflow: auto;
    }
    .ending,
    .btn__btn {
      width: 300px;
    }
  }
`;

export const CartBody = styled.table`
  // padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  border-collapse: collapse;
  // border: 1px solid #ddd;
  text-align: left;

  th {
    padding: 15px;
    border-bottom: 2px solid #000;
  }
  td {
    padding: 15px;
  }
  .del {
    color: red;
    font-size: 30px;
    margin-right: 2.7rem;
    cursor: pointer;
  }

  .left {
    background: red;
    padding: 7px 20px;
    border-radius: 5px;
    color: white;
    margin-right: 1rem;
  }
  .right {
    background: green;
    padding: 7px 20px;
    border-radius: 5px;
    color: white;
    margin-left: 1rem;
  }

  @media (max-width: 950px) {
    .left {
      padding: 4px 16px;
      margin-bottom: 10rem;
    }
    .right {
      padding: 4px 16px;
      margin-top: 10rem;
    }
  }
`;

export const CartImgCont = styled.div`
  // border: 2px solid black;
  width: 100px;
  height: 100px;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  @media (max-width: 950px) {
    width: 80px;
    height: 80px;
  }
`;
