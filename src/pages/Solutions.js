import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { AFFILIATIONS } from "../constants/constants.js";

const Solutions = () => {

  // Need to change the desc 
  const data = [
    // {
    //   title: "VET FIRST",
    //   desc: "Our Vet First certification pays tribute to the brave men and women who have served our nation. It's a symbol of our respect and commitment to providing opportunities and support to veterans as they transition to civilian life. At CodeAugurs, we honor your service with our dedication to excellence.",
    // },
    // {
    //   title: "Minority-Owned Business Certification",
    //   desc: "We are a certified Minority-Owned Business, and diversity is more than just a word to us – it's our strength. This certification reflects our deep-rooted belief that diverse perspectives drive innovation and success. When you choose CodeAugurs, you're choosing a partner that celebrates and leverages diversity to deliver exceptional solutions.",
    // },
    // {
    //   title: "8A Certification",
    //   desc: "CodeAugurs is proudly 8A certified, demonstrating our eligibility to participate in the Small Business Administration's 8(a) Business Development Program. This certification empowers us to deliver top-tier services while contributing to the growth and prosperity of small businesses across the country.",
    // },
    // {
    //   title: "Member of the National Veteran SBA Association",
    //   desc: "We are also a proud member of the National Veteran Small Business Association, further solidifying our commitment to veterans and their success in the business world.",
    // },
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
    <Container id="certifications">
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
                <TitleCard>{e.title}</TitleCard>
                <Span>{e.desc}</Span>
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
  flex-direction: column;
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
