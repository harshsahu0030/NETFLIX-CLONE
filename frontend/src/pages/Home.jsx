import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Slider from "../components/Home/Slider";
import Cards from "../components/Home/Cards";
import Footer from "../components/Footer/Footer";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0);
  color: #fefefe;
`;

const Hr = styled.div`
  width: 100%;
  border: 2px solid rgb(35, 35, 35);
`;

const Home = () => {
  return (
    <Container>
      <Header />

      <Slider />
      <Hr />

      <Cards type="My Playlists" />
      <Hr />

      <Cards type="Trending on Netflix" />
      <Hr />

      <Cards type="Netflix Originals" />
      <Hr />

      <Cards type="Movies" />
      <Hr />

      <Cards type="Web Series" />
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

export default Home;
