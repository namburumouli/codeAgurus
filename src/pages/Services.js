import React from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars-2";
import ServicesCard from "../components/ServiceCard";
import serviceImg from "../assests/servicesImg.png";
import pinkzgroup from "../assests/service1.png";
import brownzgroup from "../assests/Group 9.png";
import {SERVICES} from "../constants/constants.js"

const Services = () => {
  const data = [
    {
      image: serviceImg,
      title: "Application Development",
      subtitle: "CRM, ERP, E-commerce",
      desc: "Unlock the potential of your ideas with our custom applications development services. Our expert team turns your concepts into functional, innovative solutions tailored to your needs",
    },
    {
      image: pinkzgroup,
      title: "Consulting",
      subtitle: "CRM, ERP, E-commerce",
      desc: "Leverage our extensive industry knowledge and experience to drive your business forward. Our expert consultants provide strategic guidance to help you make informed decisions and achieve your goals.",
    },
    {
      image: brownzgroup,
      title: "Business Analytics",
      subtitle: "CRM, ERP, E-commerce",
      desc: "Data is the key to informed decision-making. We offer powerful business analytics solutions to extract actionable insights from your data, empowering you to make data-driven decisions",
    },
    {
      image: serviceImg,
      title: "Mobile Application Development",
      subtitle: "CRM, ERP, E-commerce",
      desc: "Stay ahead in the mobile era with our mobile application development expertise. We craft user-friendly, high-performance mobile apps that connect and engage your audience.",
    },
    {
      image: serviceImg,
      title: "Affordable IT Training, Powered by SBA Support",
      subtitle: "CRM, ERP, E-commerce",
      desc: "We believe that IT education should be accessible to all. That's why we've partnered with the Small Business Administration (SBA) to offer affordable IT training programs. With us, you'll receive top-tier training that doesn't break the bank.",
    }
  ];

  return (
    <Container id="services"> 
      <TitleText>{SERVICES}</TitleText>
      <Wrapper>
        {data.map((e, i) => (
          <ServicesCard data={e} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 100%;
  background: #171717;
`;

const Span = styled.span`
  color: #3FE3F3;
  font-family: Jost;
  font-size: 20.9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  text-align:center;
`;

const TitleText = styled.div`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center;
  padding-top: 20px;
  margin-left: 1rem;

  @media (max-width: 768px) {
    font-size: 30px; /* Decrease font size for mobile devices */
    padding-top: 10px; /* Adjust padding for better spacing on mobile */
  }
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  overflow-x: auto;
  // margin-left:65px;
  // margin-right:65px;
  margin: 0% 10%;

  @media (max-width: 1024px) {
    flex-direction: column; /* Change to vertical layout for tablets and smaller screens */
    align-items: center; /* Center items vertically */   
    margin-left: 0px;
    margin-right: 0px; 
  }
`;
