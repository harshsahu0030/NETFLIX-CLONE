import React from "react";
import styled from "styled-components";
import TranslateIcon from "@mui/icons-material/Translate";
import { Link } from "react-router-dom";
import LanderForm from "./LanderForm";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 0 12vmax;
  color: #fefefe;
  background: linear-gradient(
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.9)
    ),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg");

  @media screen and (max-width: 600px) {
    height: 82vh;
    padding: 0 2vmax;
  }
`;

const Header = styled.div`
  height: 6vmax;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    height: 12vmax;
  }
`;

const HeaderImage = styled.img`
  height: 100%;

  @media screen and (max-width: 600px) {
    height: 8vmax;
  }
`;

const HeaderItems = styled.div`
  display: flex;
  gap: 2vmax;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5vmax;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(95, 95, 95);
  border-radius: 5px;
  gap: 0.5vmax;
  font-size: 1vmax;

  &:hover {
    border: 1px solid #fefefe;
  }

  svg {
    font-size: 1vmax;

    @media screen and (max-width: 600px) {
      font-size: 1.8vmax;
    }
  }
`;

const Select = styled.select`
  color: #fefefe;
  background-color: transparent;
  border: none;
  font-size: 1vmax;

  @media screen and (max-width: 600px) {
    font-size: 1.8vmax;
  }
`;

const Option = styled.option``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fefefe;
  padding: 0.5vmax 0.8vmax;
  background-color: rgb(229, 9, 20);
  border-radius: 5px;
  border: none;
  font-size: ${(props) => (props.variant === "signin" ? "1vmax" : "1.5vmax")};
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  gap: 0.5vmax;

  &:hover {
    background-color: rgb(168, 9, 17);
  }

  @media screen and (max-width: 600px) {
    font-size: ${(props) => (props.variant === "signin" ? "2vmax" : "2.5vmax")};
    padding: 1vmax 2vmax;
  }
`;

const Center = styled.div`
  height: calc(100% - 6vmax);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1vmax;
  color: #fefefe;
  padding: 0 2vmax;

  @media screen and (max-width: 600px) {
    height: calc(82vh - 12vh);
    gap: 2vmax;
  }
`;

const H1 = styled.h1`
  font-size: 2.8vmax;
  text-align: center;
  font-weight: 800;

  @media screen and (max-width: 600px) {
    font-size: 4vmax;
  }
`;

const H2 = styled.h2`
  font-size: 1.5vmax;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 2.5vmax;
  }
`;

const LanderTop = ({ handleIsRegistered, checkEmail, setCheckEmail }) => {
  return (
    <Container>
      <Header>
        <HeaderImage
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-768x432.png"
          alt="logo"
        />
        <HeaderItems>
          <SelectContainer>
            <TranslateIcon />
            <Select>
              <Option value={"english"}>English</Option>
              <Option value={"hindi"}>Hindi</Option>
            </Select>
          </SelectContainer>
          <Link to="/signin">
            <Button variant="signin">Sign In</Button>
          </Link>
        </HeaderItems>
      </Header>

      <Center>
        <H1>Enjoy big movies, hit series and more from ₹ 149.</H1>
        <H2>Join today. Cancel anytime.</H2>
        <LanderForm
          handleIsRegistered={handleIsRegistered}
          checkEmail={checkEmail}
          setCheckEmail={setCheckEmail}
        />
      </Center>
    </Container>
  );
};

export default LanderTop;
