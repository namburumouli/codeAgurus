import React from "react";
import styled from "styled-components";
import { WHAT_WE_DO_DESC, WHAT_WE_DO_TITLE } from "../constants/constants";
import blub from "../assests/blub.png"; // Correct the typo in "assests" to "assets"

const WhatWeDoPage = () => {
  return (
    <ComponentContainer>
      <Title>{WHAT_WE_DO_TITLE}</Title>
      <ImageContainer>
        <Image src={blub} alt="blub" />
      </ImageContainer>
      <Description>{WHAT_WE_DO_DESC}</Description>
    </ComponentContainer>
  );
};

export default WhatWeDoPage;

// Define styled components for typography
const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 60px;
  text-align: center;
  color: #fff;
  margin-bottom: 20px; /* Add some spacing between the title and image */
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: #fff;
  margin: 0% 10%;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Define the container for the component
const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; /* Add some padding for spacing */
  text-align: center;
`;

// Define the image container
const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px; /* Set a maximum width for the image container */
`;

// Define the image styles
const Image = styled.img`
  width: 100%;
  max-width: 100%; /* Ensure the image is responsive within its container */
  height: auto;
`;

export const GlobeImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;
