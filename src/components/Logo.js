import React from "react";
import styled from "styled-components";

const LogoText = styled.span`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  font-family: "Helvetica";
  color: white;
`;

const Highlight = styled.span`
  color: #e94e34;
`;

const Logo = ({ fontSize }) => (
  <LogoText fontSize={fontSize}>
    Terabh<Highlight>AI</Highlight>
  </LogoText>
);

export default Logo;
