import React, { useEffect } from "react";
import styled from "styled-components";
import WhatWeDo from "./WhatWeDoPage";
import { ABOUT_US_DESC, COMPANY } from "../constants/constants.js";
import unckleSam from "../assests/unckleSam.png";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container id="about">
      <ContentWrapper>
        <ImageWrapper
          data-aos="fade-right"
          data-aos-anchor="#about"
          data-aos-offset="-100"
          data-aos-duration="1000"
        >
          <Img src={unckleSam} alt="uncle sam" />
          <Text>I Want you for a Career in IT </Text>
        </ImageWrapper>
        <Description
          data-aos="fade-left"
          data-aos-anchor="#about"
          data-aos-offset="-100"
          data-aos-duration="1000"
        >
          {ABOUT_US_DESC}
        </Description>
      </ContentWrapper>
      <WhatWeDo />
      <CompanyText>{COMPANY}</CompanyText>
    </Container>
  );
};

export default AboutUs;

const Container = styled.div`
  background: #000000;
  height: 100%;
  width: 100%;
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 80%; /* Adjusted max-width for the image */
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 20px;
  }
`;

const Description = styled.div`
  margin: auto;
  padding-top: 20px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 18px; /* Adjusted font size for better readability */
  line-height: 1.5;
  max-width: 800px; /* Adjusted max-width for the description text */
`;

const Text = styled.div`
  margin: auto;
  padding-top: 20px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 25px; /* Adjusted font size for better readability */
  line-height: 1.5;
  font-weight: bold;
  background: var(
    --DOML-gradient-1,
    linear-gradient(267deg, #00f0ff 4.01%, #5200ff 57.55%, #ff2df7 114.97%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CompanyText = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  padding-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
