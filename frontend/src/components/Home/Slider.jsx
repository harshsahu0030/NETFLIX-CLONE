import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    height: fit-content;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "0px"};
  right: ${(props) => props.direction === "right" && "0px"};
  opacity: 0.5;
  z-index: 2;
  transition: all 200ms linear;

  &&:hover {
    transform: scale(1.1);
  }

  svg {
    color: #fff7f7;
  }

  @media screen and (max-width: 600px) {
    opacity: 20%;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  padding: 0 5vmax;
  gap: 2.5vmax;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.1)
    ),
    url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 600px) {
    padding: 2vmax 2vmax;
    background-position: center center;
    background-size: contain;
    gap: 1.5vmax;
  }
`;

const Heading = styled.h1`
  font-size: 3vmax;
  text-transform: uppercase;
  color: #fefefe;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fefefe;
  width: 60%;
  gap: 1vmax;
`;

const Title = styled.h2`
  font-size: 1.8vmax;
`;

const Info = styled.div`
  display: flex;
  gap: 1vmax;
  color: #c1c0c0;
`;

const Span = styled.span`
  color: #c1c0c0;
  font-size: 1vmax;
`;

const Joint = styled.div`
  border: 1px solid #c1c0c0;
`;

const Desc = styled.p`
  font-size: 1vmax;
`;

const Button = styled.button`
  width: fit-content;
  font-size: 1vmax;
  padding: 0.5vmax 1vmax;
  cursor: pointer;
  background-color: #ff0000;
  border: none;
  color: #fefefe;
  border-radius: 5px;
  transition: all 0.2s linear;

  &:hover {
    background-color: #b90202;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderItems = [
    {
      id: 1,
      img: "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXd70HawdJeuD.jpg?r=608",
      title: "Stranger Things",
      year: 2016,
      seasons: 4,
      type: "horror",
      desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      Starring: "Winona Ryder,David Harbour,Millie Bobby Brown",
      Creators: "The Duffer Brothers",
    },
    {
      id: 2,
      img: "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaJJIdyKMNvEcWhAtI5Xk12MQLY8DLxAkM2k8unVHyRordNL9Jn726cLoEmP_DAn44vwE3_l9dWTpDQTvmzsk6REyj4veXm9bvQ8.jpg?r=e19",
      title: "Money Heist",
      year: 2017,
      seasons: 5,
      type: "Fantacy",
      desc: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
      Starring: "Úrsula Corberó,Álvaro Morte,Itziar Ituño",
      Creators: "Álex Pina",
    },
    {
      id: 3,
      img: "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdvTEbcqWIVSCe2gEgWXwpts5Gqa-BfAjo0_lIBvQXWJNMCwS3YbhkEXSs3Sr0dqqBR3b7XmW71P0fqVHcAjhIrQXojRChHCUFoN.jpg?r=321",
      title: "Lucifer",
      year: 2016,
      seasons: 6,
      type: "Fantacy",
      desc: "Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective.",
      Starring: "Tom Ellis,Lauren German,Kevin Alejandro",
      Creators: "The Duffer Brothers",
    },
  ];

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide img={item.img} bg={item.bg} key={item.id}>
            <Heading>{item.title}</Heading>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Info>
                <Span>{item.year}</Span>
                <Joint />

                <Span>{item.seasons ? `${item.seasons} seasons` : ""}</Span>
                <Joint />

                <Span>{item.type}</Span>
              </Info>
              <Desc>{item.desc} </Desc>

              <Desc>
                <Span>Starring: </Span>
                {item.Starring}
                <br />
                <Span>Creators: </Span>
                {item.Creators}
              </Desc>
              <Button>PLAY NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
