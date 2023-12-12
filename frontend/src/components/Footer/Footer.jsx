import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 3vmax 12vmax;
  color: rgb(150, 150, 150);
  display: flex;
  flex-direction: column;
  gap: 1vmax;
  background-color: rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 600px) {
    padding: 3vmax 5vmax;
  }
`;

const HelpLine = styled.div`
  font-size: 1vmax;

  @media screen and (max-width: 600px) {
    font-size: 2vmax;
  }
`;

const LinkItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1vmax;

  @media screen and (max-width: 600px) {
    gap: 1.5vmax;
  }
`;

const LinkItem = styled.div`
  width: 15vmax;

  @media screen and (max-width: 600px) {
    width: 20vmax;
  }

  a {
    color: inherit;
    font-size: 1vmax;

    @media screen and (max-width: 600px) {
      font-size: 1.5vmax;
    }
  }
`;

const Footer = ({ links }) => {
  return (
    <Container>
      <HelpLine>Questions? Call 000-800-919-1694</HelpLine>

      <LinkItems>
        {links &&
          links.map((item) => (
            <LinkItem key={item}>
              <Link to="/">{item}</Link>
            </LinkItem>
          ))}
      </LinkItems>

      <HelpLine>NetFlix India</HelpLine>
    </Container>
  );
};

export default Footer;
