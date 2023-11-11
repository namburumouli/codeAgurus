import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { AFFILIATIONS } from "../constants/constants.js";
import MPMSDC from "../assests/MPMSDC.png";
import VOSB from "../assests/vosb.jpeg"

const Solutions = () => {

  // Need to change the desc 
  const data = [
    {
      title: "VOSB Certified ",
      desc: "We are a 51% veteran owned and Operated small business certified by the SBA. In Accordance with our operating model we highly encourage all Veterans , Transitioning veterans and members of US Armed forces reserves to reach out to us to schedule a one on one on any questions you may have on transitioning to a productive career in IT and everybody else for any collaborations",
      img:VOSB
    },
    {
      title: "MPMSDC Certified",
      desc: "We are a certified Minority-Owned Business, and diversity is more than just a word to us – it's our strength. This certification reflects our deep-rooted belief that diverse perspectives drive innovation and success. When you choose CodeAugurs, you're choosing a partner that celebrates and leverages diversity to deliver exceptional solutions.",
      img:MPMSDC
    }
  ];

  const [index, setIndex] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const lastIndex = data.length - 1;

    const scrollNext = () => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const scrollInterval = setTimeout(scrollNext, 5000); // Adjust the interval time as needed

    const stopScroll = () => {
      clearTimeout(scrollInterval);
    };

    const container = contentRef.current;

    if (container) {
      container.addEventListener("mouseenter", stopScroll);
      container.addEventListener("mouseleave", () => {
        stopScroll();
        // Start scrolling again after 5 seconds when the mouse leaves
        setTimeout(() => {
          scrollInterval = setTimeout(scrollNext, 5000);
        }, 5000);
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", stopScroll);
      }
      clearTimeout(scrollInterval);
    };
  }, [index, data]);

  useEffect(() => {
    const container = contentRef.current;
    const scrollWidth = container.scrollWidth;
    const scrollLeft = (scrollWidth / data.length) * index;
    container.scrollLeft = scrollLeft;
  }, [index, data]);

  return (
    <Container id="affiliations">
      <Wrapper>
        <StaticTitle>{AFFILIATIONS}</StaticTitle>
        <Divider /> 
        <Content ref={contentRef}>
          {data.map((e, i) => {
            let position = "nextSlide";
            if (i === index) {
              position = "activeSlide";
            }
            if (i === index - 1 || (index === 0 && i === data.length - 1)) {
              position = "lastSlide";
            }
            return (
              <ContentItem key={i}>
                <Image src={e.img} alt={e.title} /> 
                <TextWrapper>
                  <TitleCard>{e.title}</TitleCard>
                  <Span>{e.desc}</Span>
                </TextWrapper>            
              </ContentItem>
            );
          })}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Solutions;

const Container = styled.div`
  margin: auto;
  margin-top: 40px;
  width: 100%;
  max-width: 1167px;
  height: auto;
  border-radius: 20px;
  background: #171717;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StaticTitle = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 40.41px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: auto;
  width: -webkit-fill-available;
  text-align: center;
  margin-right: 2rem;
  margin-left: 2rem;

  @media (max-width: 768px) {
    font-size: 23.41px;
    text-align: center;
    margin: auto;
    margin-top: 10px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 301.027px;
  background: #fff;
  margin: 10px auto;
  @media (max-width: 768px) {
    background: #fff;
    width: 80%;
    height: 1px;
    margin-bottom: -30px;
    margin-top: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`;

const ContentItem = styled.div`
  scroll-snap-align: start;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const TitleCard = styled.div`
  text-align: start;
  background: var(
    --DOML-gradient-1,
    linear-gradient(267deg, #00f0ff 4.01%, #5200ff 57.55%, #ff2df7 114.97%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "ABeeZee", sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 5rem;
  padding-left: 17px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Span = styled.div`
  color: #fff;
  font-family: "ABeeZee", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Image = styled.img`
  max-width: 40%;
  height: 100px;
  flex-shrink: 0;
  margin-right: 20px; /* Adjust the margin as needed */
  z-index: 1;
  margin:auto;
  margin-top:18%;
  margin-left:5%;
  @media (max-width: 768px) {
    /* Adjust styles for smaller screens */
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  margin-left: 20px; /* Adjust the margin as needed */
  display: flex;
  flex-direction: column;
`;
