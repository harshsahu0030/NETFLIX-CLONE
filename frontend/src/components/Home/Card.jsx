import React from "react";
import styled from "styled-components";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
  transition: all 0.3s linear;
`;

const Info = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;

  svg {
    font-size: 5vmax;
    cursor: pointer;
    color: red;

    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 13vmax;
  height: 100%;
  border: 2px solid rgb(35, 35, 35);
  overflow: hidden;
  transition: all 0.3s linear;
  position: relative;

  &:hover {
    border: 2px solid red;
  }

  &:hover Img {
    opacity: 0.5;
  }

  &:hover ${Info} {
    display: block;
  }
`;

const Card = () => {
  return (
    <Container>
      <Img src="https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg" />
      <Info>
        <PlayCircleIcon />
      </Info>
    </Container>
  );
};

export default Card;
