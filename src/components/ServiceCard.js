import React from "react";
import styled from "styled-components";

const ServicesCard = (props) => {
  return (
    <Container>
      <Image src={props.data.image}></Image>
      <Title>{props.data.title}</Title>
      <SubText>{props.data.subtitle}</SubText>
      <Desc>{props.data.desc}</Desc>
    </Container>
  );
};

export default ServicesCard;

const Container = styled.div`
  width: 307px;
  height: 464px;
  flex-shrink: 0;
  background: #1f263d;
  border-radius: 25px;
  margin: 10px;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin: 5%;
    width: calc(100% - 2rem); /* Make it full width and adjust margin on smaller screens */
    max-width: 307px;
    max-height: 400px;
  }
`;

const Image = styled.img`
  width: 110.398px;
  height: 110.411px;
  flex-shrink: 0;
  margin: 10px 90px;

  @media (max-width: 768px) {
    margin: 10px auto; /* Center the image on smaller screens */
    display: block; /* Ensure the image is centered properly */
  }
`;

const Title = styled.div`
  font-family: "Jost", sans-serif;
  color: var(--S1, #858585);
  text-align: center;
  font-size: 21.19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 18px; /* Decrease the font size on smaller screens */
  }
`;

const SubText = styled.div`
  color: #3fe3f3;
  font-family: "Jost", sans-serif;
  font-size: 11.9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  text-align: center;
  margin: 10px;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 10px; /* Decrease the font size on smaller screens */
  }
`;

const Desc = styled.div`
  color: #fff;
  text-align: center;
 // font-family: "Jost", sans-serif;
 font-family: "Montserrat",sans-serif;
 // font-size: 14.29px;
     font-size: 12.29px;
  font-style: normal;
  font-weight: 400;
  line-height: 224%; /* 32.01px */
  text-transform: capitalize;
  flex-shrink: 0;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 12px; /* Decrease the font size on smaller screens */
  }
}`;
