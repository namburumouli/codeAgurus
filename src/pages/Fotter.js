import React from "react";
import styled from "styled-components";
import mailImg from "../assests/Mail.png";
import phoneImg from "../assests/Phone.png";
import pinImg from "../assests/Pin.png";

const Footer = () => {
  return (
    <Container>
      <Divider />
      <ContainerWrapper>
        <div>
          <CompanyText>CodeAugurs </CompanyText>
          <Desc>
            Code Augurs was established by a group of highly experienced
            software enthusiasts, with a vision of expansion.
          </Desc>
          <Wrapper>
            <MailIcons src={mailImg} alt="Mail" />
            <ContactLink href="mailto:hr@codeaugurs.com">hr@codeaugurs.com</ContactLink>
          </Wrapper>
          <Wrapper>
            <PhoneIcon src={phoneImg} alt="Phone" />
            <ContactLink href="tel:(916) 538-1349">(916) 538-1349</ContactLink>
          </Wrapper>
          <Wrapper>
            <PinIcon src={pinImg} alt="Pin" />
            <ContactLink href="https://maps.google.com?q=7810+W+119th+Street,+Overland+Park,+KS+-+66213">
              7810 W 119th Street, Overland Park, KS - 66213
            </ContactLink>
          </Wrapper>
        </div>
        {/* <SiteMapWrapper>
          <SiteMapText>ABOUT US</SiteMapText>
          <SiteMaps>Company Profile</SiteMaps>
          <SiteMaps>Our Values</SiteMaps>
          <SiteMaps>What We Do</SiteMaps>
          <SiteMaps>What Sets Us Apart</SiteMaps>
        </SiteMapWrapper> */}
      </ContainerWrapper>
      <Line />
      <ContainerWrapper>
        <CopyRightText>
          Copyright © 2023 CodeAugurs. All rights reserved.
        </CopyRightText>
        <ConditionsText>Terms of Use & Privacy Policy</ConditionsText>
      </ContainerWrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin: 10px;
  padding: 20px;
`;

const SiteMapText = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Divider = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 1px;
  background: #000;
`;

const SiteMapWrapper = styled.div`
  margin: 20px 20px 20px 0;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CompanyText = styled.div`
  font-family: "Jomhuria", cursive;
  color: #000;
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Desc = styled.div`
  width: 100%;
  color: #000;
  font-family: "Montserrat",sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  margin-right: 5rem;
`;

const ContactLink = styled.a`
  color: #000;
  font-family: "Montserrat",sans-serif;
  font-size: 14px;
  //font-style: italic;
  text-transform: capitalize;
  margin-left: 10px;
  text-decoration: none; /* Remove underlines from links */
  &:hover {
    text-decoration: underline; /* Add underline on hover */
  }
`;

const MailIcons = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const PhoneIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const PinIcon = styled.img`
  width: 14px;
  height: 20px;
  margin-right: 5px;
`;

const SiteMaps = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Line = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    267deg,
    #00f0ff 4.01%,
    #5200ff 57.55%,
    #ff2df7 114.97%
  );
`;

const CopyRightText = styled.div`
  color: #171717;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const ConditionsText = styled.div`
  margin-top: 10px;
  flex-grow: 1;
  color: #171717;
  text-align: right;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 5px;
`;
