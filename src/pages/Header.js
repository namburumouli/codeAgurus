import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assests/Logo.png";
import { HashLink as Link } from "react-router-hash-link";
import Linkedin from "../assests/linkedin.png";
import "../styles/Navbar.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Wrapper>
        <Logo src={logo} alt="Logo"></Logo>
        <MobileMenuButton onClick={toggleMenu}>
          <MobileMenuIcon>&#9776;</MobileMenuIcon>
        </MobileMenuButton>
        <NavWrapper mobileMenuOpen={menuOpen}>
          <NavText to="/#home">Home</NavText>
          <NavText to="/#about">About us</NavText>
          <NavText to="/#services">Services</NavText>
          <NavText to="/#certifications">Certifications</NavText>
          <LinkedInLink href="https://www.linkedin.com/in/code-augurs-3b2960240/">
            <LinkedInIcon src={Linkedin} alt="LinkedIn Icon" />
          </LinkedInLink>
        </NavWrapper>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #fff;
  padding: 10px;
`;

const NavText = styled(Link)`
  margin: 10px;
  color: #171717;
  font-family: "Actor", sans-serif;
  font-size: 15.563px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    right: ${(props) => (props.mobileMenuOpen ? "0" : "-100%")};
    background-color: #fff;
    transition: right 0.3s ease-in-out;
    z-index: 1;
    width: 100%;
    padding: 20px;
    display: ${(props) => (props.mobileMenuOpen ? "" : "none")};

    ${NavText} {
      margin: 10px 0;
    }
  }
`;

const Logo = styled.img`
  margin: 10px 0px 0px 20px;
  width: 284px;
  height: 66px;
  flex-shrink: 0;
  background: url(<path-to-image>), white 50% / cover no-repeat;

  @media (max-width: 768px) {
    width: 200px;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuIcon = styled.span`
  color: #171717;
`;

const LinkedInIcon = styled.img`
  margin-top: 0.4rem;
  width: 25px; /* Adjust the size as needed */
  height: 25px; /* Adjust the size as needed */
  cursor: pointer;
`;

const LinkedInLink = styled.a`
  text-decoration: none;
`;
