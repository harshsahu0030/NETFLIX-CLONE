import React from "react";
import styled from "styled-components";
import LanderAccordion from "./LanderAccordion";
import LanderForm from "./LanderForm";

const Container = styled.div`
  color: #fefefe;
  min-height: 100vh;
  width: 100%;
  padding: 3vmax 12vmax;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vmax;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 5vmax 2vmax;
    gap: 3vmax;
  }
`;

const H1 = styled.h1`
  font-size: 3vmax;
  font-weight: 800;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 4vmax;
  }
`;

const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7vmax;

  @media screen and (max-width: 600px) {
    gap: 1vmax;
  }
`;

const LanderQuestion = () => {
  return (
    <Container>
      <H1>Frequently Asked Questions</H1>
      <AccordionContainer>
        <LanderAccordion />
        <LanderAccordion />
        <LanderAccordion />
        <LanderAccordion />
        <LanderAccordion />
        <LanderAccordion />
      </AccordionContainer>

      <LanderForm />
    </Container>
  );
};

export default LanderQuestion;
