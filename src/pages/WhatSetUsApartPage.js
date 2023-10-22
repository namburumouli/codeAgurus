import React from "react";
import styled from "styled-components";
import {
  WHAT_SET_US_APART,
  WHAT_SET_US_APART_DESC,
} from "../constants/constants.js";

const WhatSetUsApartPage = () => {
  return (
    <Container>
      <TitleText>{WHAT_SET_US_APART}</TitleText>
      <Desc>{WHAT_SET_US_APART_DESC}</Desc>
    </Container>
  );
};

export default WhatSetUsApartPage;

const Container = styled.div`
  background: #001f3f;
  margin: 2% 10%;
  padding: 3%;
  border-radius:25px;
`;

const TitleText = styled.div`
  height: 36px;
  flex-shrink: 0;
  font-family: "ABeeZee", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: linear-gradient(
    267deg,
    #00f0ff 4.01%,
    #5200ff 57.55%,
    #ff2df7 114.97%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-left: 5%;
    margin-right: 5%;
    padding-top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-left: 5%;
    margin-right: 5%;
    padding-top: 2rem;
  }
`;

const Desc = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 20px;
  color: #fff;
  font-family: "Montserrat",sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 196.9%; /* 59.07px */

  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 10px;
  }
`;
