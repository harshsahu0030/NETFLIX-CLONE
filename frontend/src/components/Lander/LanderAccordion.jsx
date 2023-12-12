import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled.div`
  width: 100%;
`;

const Button = styled.button`
  height: 5vmax;
  width: 100%;
  background-color: rgb(45, 45, 45);
  color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0 1.5vmax;
  transition: 0.4s;

  &:hover {
    background-color: rgb(71, 71, 71);
  }

  svg {
    font-size: 3vmax;
  }

  @media screen and (max-width: 600px) {
    height: 10vmax;
    padding: 0 2.5vmax;
  }
`;

const Ques = styled.p`
  font-size: 1.5vmax;

  @media screen and (max-width: 600px) {
    font-size: 2.5vmax;
  }
`;

const Panel = styled.div`
  background-color: rgb(45, 45, 45);
  overflow: hidden;
  flex-direction: column;
  gap: 2vmax;
  display: ${(props) => (props.toggle === true ? "flex" : "none")};
  padding: 1.5vmax 2.5vmax;

  @media screen and (max-width: 600px) {
    padding: 3vmax 2.5vmax;
  }
`;

const Para = styled.p`
  font-size: 1.5vmax;

  @media screen and (max-width: 600px) {
    font-size: 2.5vmax;
  }
`;

const LanderAccordion = () => {
  const [toggle, setToggle] = useState(false);

  const handleButton = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Button onClick={handleButton}>
        <Ques>What is Netflix ?</Ques>
        {toggle ? <CloseIcon /> : <AddIcon />}
      </Button>
      <Panel toggle={toggle}>
        <Para>
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.
        </Para>
        <Para>
          You can watch as much as you want, whenever you want, without a single
          ad – all for one low monthly price. There's always something new to
          discover, and new TV shows and movies are added every week!
        </Para>
      </Panel>
    </Container>
  );
};

export default LanderAccordion;
