import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const TopbarContainer = styled.div`
  background-color: #333;
  width: 60%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border-radius: 100px;
`;

const LinkContainer = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  border-radius: 100px;
  background-color: ${({ hover }) => (hover ? "black" : "transparent")};
  color: white;
  text-decoration: none;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  fontfamily: "Helvetica";

  &:hover {
    background-color: black;
  }
`;

const DownloadButton = styled.div`
  background-color: orange;
  border-radius: 100px;
  color: white;
  text-decoration: none;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  fontfamily: "Helvetica";
`;

const Topbar = () => {
  const [hover, setHover] = useState({
    Home: false,
    Company: false,
    Resources: false,
    Webapp: false,
  });

  const handleMouseEnter = (link) => {
    setHover((prevHover) => ({ ...prevHover, [link]: true }));
  };

  const handleMouseLeave = (link) => {
    setHover((prevHover) => ({ ...prevHover, [link]: false }));
  };

  return (
    <TopbarContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={"public/logo192.png"} alt="logo" />
        <Logo fontSize={"30px"} />
      </div>

      <LinkContainer>
        <StyledLink
          to="/"
          hover={hover.Home}
          onMouseEnter={() => handleMouseEnter("Home")}
          onMouseLeave={() => handleMouseLeave("Home")}
        >
          Home
        </StyledLink>
        <StyledLink
          to="/Company"
          hover={hover.Company}
          onMouseEnter={() => handleMouseEnter("Company")}
          onMouseLeave={() => handleMouseLeave("Company")}
        >
          Company
        </StyledLink>
        <StyledLink
          to="/Resources"
          hover={hover.Resources}
          onMouseEnter={() => handleMouseEnter("Resources")}
          onMouseLeave={() => handleMouseLeave("Resources")}
        >
          Resources
        </StyledLink>
        <StyledLink
          to="/Webapp"
          hover={hover.Webapp}
          onMouseEnter={() => handleMouseEnter("Webapp")}
          onMouseLeave={() => handleMouseLeave("Webapp")}
        >
          Webapp
        </StyledLink>
      </LinkContainer>
      <DownloadButton>Download App</DownloadButton>
    </TopbarContainer>
  );
};

export default Topbar;
