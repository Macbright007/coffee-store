import React from "react";
import {
  AboutWrapper,
  ImgContainer,
  InnerWrapper,
  LeftSideContent,
} from "./styles";
import aboutUs from "../images/aboutImage.svg";

const About = () => {
  return (
    <AboutWrapper>
      <h3>About us</h3>

      <InnerWrapper>
        <ImgContainer>
          <img src={aboutUs} alt="aboutlogo" />
        </ImgContainer>

        <LeftSideContent>
          <p>
            Lorem Ipsum Aliqua id fugiat nostrud irure ex duis ea quis id quis
            ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum
            minim tempor enim. Elit aute irure tempor cupidatat incididunt sint
            deserunt ut voluptate aute id deserunt nisi.
          </p>
            <br />
          <p>
            Lorem Ipsum id fugiat nostrud irure ex duis ea quis id quis ad et.
            Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
            tempor enim.
          </p>
        </LeftSideContent>
      </InnerWrapper>
    </AboutWrapper>
  );
};

export default About;
