import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 90vh;
  width: 32%;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 4vmax;
  margin-bottom: 1vmax;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0vmax;
    min-height: 80vh;
  }
`;

const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2vmax;

  @media screen and (max-width: 600px) {
    gap: 5vmax;
  }
`;

const H1 = styled.h1`
  font-size: 2vmax;
  font-weight: 500;

  @media screen and (max-width: 600px) {
    font-size: 4vmax;
  }
`;

const InputDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vmax;

  @media screen and (max-width: 600px) {
    gap: 2vmax;
  }
`;

const Input = styled.input`
  color: #fefefe;
  background-color: rgb(51, 51, 51);
  font-size: 1vmax;
  padding: 1vmax 1.5vmax;
  outline: none;
  border: none;
  border-radius: 5px;

  &::placeholder {
    color: rgb(200, 200, 200);
  }

  &:focus {
    background-color: rgb(68, 68, 68);
  }

  @media screen and (max-width: 600px) {
    padding: 2vmax;
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
  padding: 1vmax;
  border-radius: 5px;
  border: none;
  font-size: 1vmax;
  font-weight: 600;
  cursor: pointer;
  gap: 0.5vmax;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgb(168, 9, 17);
  }

  @media screen and (max-width: 600px) {
    padding: 2vmax;
    font-size: 2vmax;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5vmax 0;

  a {
    color: rgb(144, 144, 144);
    text-decoration: none;
  }
`;

const CheckBox = styled.div`
  display: flex;
  gap: 0.2vmax;
  font-size: 1vmax;

  @media screen and (max-width: 600px) {
    font-size: 2vmax;
  }
`;

const Label = styled.label`
  color: rgb(144, 144, 144);
`;

const Box = styled.div`
  padding: 4vmax 0;
  display: flex;
  flex-direction: column;
  gap: 1vmax;
`;

const Para1 = styled.p`
  color: rgb(144, 144, 144);
  font-size: 1vmax;

  @media screen and (max-width: 600px) {
    font-size: 2vmax;
  }

  a {
    color: #fefefe;
    text-decoration: none;
  }
`;

const Para2 = styled.p`
  color: rgb(144, 144, 144);
  font-size: 0.8vmax;

  @media screen and (max-width: 600px) {
    font-size: 1.5vmax;
  }

  a {
    text-decoration: none;
    color: rgb(44, 58, 209);
    font-weight: 600;
  }
`;

const SignInBox = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSignIn,
}) => {
  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        <H1>Sign In</H1>
        <InputDetails>
          <Input
            type="text"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputDetails>

        <Button type="submit">Sign In</Button>
      </Form>

      <Wrapper>
        <CheckBox>
          <Input type="checkbox" id="remenber" />
          <Label for="remenber" value={"rememberMe"}>
            Remember me
          </Label>
        </CheckBox>
        <Link>Need help?</Link>
      </Wrapper>

      <Box>
        <Para1>
          New to Netflix? <Link to="/signup">Sign up now</Link>
        </Para1>
        <Para2>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <Link>Learn more</Link>
        </Para2>
      </Box>
    </Container>
  );
};

export default SignInBox;
