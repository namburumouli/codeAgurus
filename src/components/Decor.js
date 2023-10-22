import React from "react";
import styled, { keyframes } from "styled-components";
import reactangle from "../assests/Rectangle 4131.svg";

const Decor = () =>{
    return(
        <Container>
             <DecorImg src={reactangle} />
             <Wrapper></Wrapper>
        </Container>
    );

}

export default Decor;

const Container = styled.div`
background:#000000;
@media (max-width: 1000px) {
  display:none;
}
`;

const Wrapper = styled.div`
background:#000000;
  width: 991px;
  height: 156px;

`;


const DecorImg = styled.img`
  position: absolute;
  width: 991px;
  height: 156px;
  flex-shrink: 0;
  margin-left: -10px;
  margin-right: 300px;
  margin-top: -50px;
`;