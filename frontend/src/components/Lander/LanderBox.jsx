import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #fefefe;
  height: 85vh;
  width: 100%;
  padding: 0 12vmax;
  display: flex;
  align-items: center;
  flex-direction: ${(props) =>
    props.contentDirect === "right" ? "row-reverse" : ""};

  @media screen and (max-width: 600px) {
    height: 82vh;
    padding: 6vmax 2vmax;
    flex-direction: column;
    justify-content: center;
    gap: 2vmax;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1vmax;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const ContentHead = styled.h2`
  font-size: 3vmax;

  @media screen and (max-width: 600px) {
    font-size: 5vmax;
    text-align: center;
  }
`;

const ContentInfo = styled.h3`
  font-size: 1.4vmax;
  font-weight: 400;

  @media screen and (max-width: 600px) {
    font-size: 2.5vmax;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 50%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const LanderBox = ({ contentDirect, head, info, img }) => {
  return (
    <Container contentDirect={contentDirect}>
      <ContentBox>
        <ContentHead>{head}</ContentHead>
        <ContentInfo>{info}</ContentInfo>
      </ContentBox>
      <Image src={img} />
    </Container>
  );
};

export default LanderBox;
