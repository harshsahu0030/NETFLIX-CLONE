import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vmax 5vmax;
  gap: 1vmax;

  @media screen and (max-width: 600px) {
    padding: 2vmax;
  }
`;

const H2 = styled.h2`
  font-size: 2vmax;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 1.5vmax;
  width: 100%;
  height: 20vmax;
  overflow-x: scroll;
`;

const Cards = ({ type }) => {
  return (
    <Container>
      <H2>{type}</H2>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </Container>
  );
};

export default Cards;
