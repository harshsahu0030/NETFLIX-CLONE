import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import SignUpBox from "../components/SignUp/SignUpBox";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 0 4vmax;
  color: #fefefe;
  background: linear-gradient(
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.9)
    ),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg");

  @media screen and (max-width: 600px) {
    padding: 0 2vmax;
    background: rgba(0, 0, 0);
  }
`;

const Hr = styled.div`
  width: 100%;
  border: 2px solid rgb(35, 35, 35);
`;

const Header = styled.div`
  height: 6vmax;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    height: 12vmax;
  }
`;

const HeaderImage = styled.img`
  height: 6vmax;

  @media screen and (max-width: 600px) {
    height: 8vmax;
  }
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      dispatch(registerUser(name, username, email, password));
    } catch (error) {}
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <HeaderImage
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-768x432.png"
            alt=""
          />
        </Link>
      </Header>
      <SignUpBox
        name={name}
        setName={setName}
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSignIn={handleSignUp}
      />
      <Hr />
      <Footer
        links={[
          "FAQ",
          "Help Centre",
          "Terms of Use",
          "Privacy",
          "Cookie Preferences",
          "Corporate information",
        ]}
      />
    </Container>
  );
};

export default SignIn;
