import React from "react";
import styled from "styled-components";
import Globe from "../assests/gloab.png";
import AboutUs from "./AboutUs";
import reactangle from "../assests/Rectangle 4131.svg";
import Header from "./Header";
import { TITLE, TITLE_SPAN, TAG_LINE } from "../constants/constants.js";
import Decor from "../components/Decor";

const LandingPage = () => {
  return (
    <Container id="home">
      <Header />
      <Wrapper>
        <TextWrapper>
          <Titletext>
            {TITLE} <br />
            <TextSpan>{TITLE_SPAN}</TextSpan> <Line />
          </Titletext>
          <Desc>{TAG_LINE}</Desc>
        </TextWrapper>
        <Image src={Globe}></Image>
      </Wrapper>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  width: 100%;
  height:470px;
  
  @media (min-width: 2560px) {
    height:100%;
  }
`;

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  margin-top: 10vw;

  @media (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 769px) {
    margin-left: 153px;
  }

  // @media (min-width: 2500px) {
  //   margin-left: -9%;
  // }
`;

const Titletext = styled.div`
  font-family: "ABeeZee", sans-serif;
  font-weight: 400;
  font-size: 3vw;
  background: var(
    --DOML-gradient-1,
    linear-gradient(267deg, #00f0ff 4.01%, #5200ff 57.55%, #ff2df7 114.97%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 480px){
    font-size: 20px;
    margin-top:30px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin-top:30px;
   }
`;

const TextSpan = styled.span``;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 2vw;
  background: linear-gradient(
    267deg,
    #00f0ff 4.01%,
    #5200ff 57.55%,
    #ff2df7 114.97%
  );
`;

const Desc = styled.div`
  color: #171717;
  font-family: Montserrat;
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 2vw 0px 2vw;

  @media (max-width: 768px) {
    margin: 2vw 0;
  }
    @media (max-width: 480px){
    font-size: 12px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto; // Maintain aspect ratio
  flex-shrink: 0;
  margin-top: 2vw;
  z-index: 1;

  @media (max-width: 768px) {
    height: 250px;
  }

   @media (max-width: 480px){
   height:250px;
   margin-top:25px;
  }
`;

const DecorImg = styled.img`
  position: absolute;
  width: 100%;
  height: auto; // Maintain aspect ratio
  flex-shrink: 0;
  margin: 2vw 0;
`;
