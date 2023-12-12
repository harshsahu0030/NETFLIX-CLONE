import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 1vmax;

  @media screen and (max-width: 600px) {
    min-height: 15vmax;
    gap: 2vmax;
  }
`;

const InputDetails = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  gap: 0.5vmax;
  width: 70%;
  height: 4vmax;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 2vmax;
    height: 15vmax;
  }
`;

const Input = styled.input`
  color: #fefefe;
  flex: 4;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(95, 95, 95);
  font-size: 1vmax;
  padding: 0 1vmax;

  p &::placeholder {
    color: #fefefeb4;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1.5vmax 2vmax;
    font-size: 2vmax;
  }
`;

const Button = styled.button`
  flex: "2.2";
  height: 100%;
  color: #fefefe;
  background-color: rgb(229, 9, 20);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5vmax;
  border-radius: 5px;
  border: none;
  font-size: 1.5vmax;
  font-weight: 600;
  cursor: pointer;
  gap: 0.5vmax;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgb(168, 9, 17);
  }

  @media screen and (max-width: 600px) {
  }
`;

const H3 = styled.h3`
  font-size: 1.3vmax;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 2.5vmax;
  }
`;

const LanderForm = ({ handleIsRegistered, checkEmail, setCheckEmail }) => {
  return (
    <Form onSubmit={handleIsRegistered}>
      <H3>
        Ready to watch? Enter your email to create or restart your membership.
      </H3>
      <InputDetails>
        <Input
          type="email"
          placeholder="Email address"
          value={checkEmail}
          onChange={(e) => setCheckEmail(e.target.value)}
          required
        />
        <Button type="submit">
          Get Started <ArrowForwardIosIcon />
        </Button>
      </InputDetails>
    </Form>
  );
};

export default LanderForm;
