import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListBox from "./ListBox";

const Container = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3vmax;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgb(0, 0, 0);

  @media screen and (max-width: 600px) {
    padding: 0 2vmax;
    height: 7vh;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1vmax;
`;

const Logo = styled.img`
  height: 10vh;
  padding-right: 1vmax;
  display: flex;
  align-self: center;

  @media screen and (max-width: 600px) {
    height: 5vh;
  }
`;

const LinkItem = styled.div`
  color: rgb(150, 150, 150);
  cursor: pointer;
  position: relative;
  font-size: 1vmax;

  &:hover {
    color: #fefefe;
  }

  a {
    color: rgb(150, 150, 150);
    text-decoration: none;
    font-size: 1vmax;
  }

  a:hover {
    color: #fefefe;
  }

  svg {
    font-size: 1.5vmax;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1vmax;
`;

const Header = () => {
  const [accountToggle, setAccountToggle] = useState(false);

  return (
    <Container>
      {accountToggle && (
        <ListBox
          type="Account"
          accountToggle={accountToggle}
          setAccountToggle={setAccountToggle}
        />
      )}

      <LeftContainer>
        <Link to="/">
          <Logo
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-768x432.png"
            alt="logo"
          />
        </Link>
        <LinkItem>
          <Link to="/public">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/">TV Shows</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/">Moviews</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/">Recently Added</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/">My List</Link>
        </LinkItem>
      </LeftContainer>
      <RightContainer>
        <LinkItem>
          <SearchIcon />
        </LinkItem>
        <LinkItem>ENG</LinkItem>
        <LinkItem>
          <NotificationsIcon />
        </LinkItem>
        <LinkItem>
          <AccountCircleIcon onClick={() => setAccountToggle(!accountToggle)} />
        </LinkItem>
      </RightContainer>
    </Container>
  );
};

export default Header;
