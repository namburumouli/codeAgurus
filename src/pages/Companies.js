import React from "react";
import styled from "styled-components";
import CompaniesImage from "../assests/companies.png";

const Companies = () => {
  return (
    <Container id="clients">
      <Image src={CompaniesImage} alt="Companies"></Image>
    </Container>
  );
};

export default Companies;

const Container = styled.div`
  margin: 20px; /* Adjust the margin for spacing */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin: 30px; /* Increase margin for larger screens */
  }

  @media (min-width: 1024px) {
    margin: 50px; /* Further increase margin for desktop screens */
  }
`;

const Image = styled.img`
  max-width: 100%; /* Ensure the image doesn't exceed its container width */
  height: auto; /* Maintain the image's aspect ratio */

  @media (min-width: 768px) {
    max-width: 80%; /* Decrease image size for larger screens */
  }

  @media (min-width: 1024px) {
    max-width: 60%; /* Decrease image size further for desktop screens */
  }
`;
