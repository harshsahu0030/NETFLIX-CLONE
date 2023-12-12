import React, { useState } from "react";
import styled from "styled-components";
import LanderTop from "../components/Lander/LanderTop";
import LanderBox from "../components/Lander/LanderBox";
import LanderQuestion from "../components/Lander/LanderQuestion";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { isRegisteredUser } from "../actions/userAction";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  min-height: 200vh;
  width: 100%;
  background-color: rgba(0, 0, 0);
`;

const Hr = styled.div`
  width: 100%;
  border: 4px solid rgb(35, 35, 35);
`;

const Lander = () => {
  const [checkEmail, setCheckEmail] = useState("");
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.isRegistered);
  const navigate = useNavigate();

  const handleIsRegistered = async (e) => {
    try {
      e.preventDefault();
      await dispatch(isRegisteredUser(checkEmail));

      if (message.registered === "registered") {
        navigate("/signin");
      }
      if (message.registered === "not-registered") {
        navigate("/signup");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <LanderTop
        handleIsRegistered={handleIsRegistered}
        checkEmail={checkEmail}
        setCheckEmail={setCheckEmail}
      />
      <Hr />
      <LanderBox
        contentDirect="left"
        head="Enjoy on your TV"
        info="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />
      <Hr />
      <LanderBox
        contentDirect="right"
        head="Download your shows to watch offline"
        info="Save your favourites easily and always have something to watch."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      />
      <Hr />
      <LanderBox
        contentDirect="left"
        head="Watch everywhere"
        info="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
      />
      <Hr />
      <LanderBox
        contentDirect="right"
        head="Create profiles for kids"
        info="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        img="https://occ-0-2484-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
      />
      <Hr />
      <LanderQuestion />
      <Hr />

      <Footer
        links={[
          "FAQ",
          "Help Centre",
          "Account",
          "Media Centre",
          "Inverter realation",
          "Jobs",
          "Ways to watch",
          "Terms of Use",
          "Privacy",
          "Cookie Preferences",
          "Corporate information",
          "Contact us",
          "Speed Test",
          "Legal Notices",
          "Only on Netflix",
        ]}
      />
    </Container>
  );
};

export default Lander;
