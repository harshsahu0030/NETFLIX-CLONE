import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/userAction";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SecurityIcon from "@mui/icons-material/Security";
import HelpIcon from "@mui/icons-material/Help";

const Container = styled.div`
  min-height: 90vh;
  width: 100vw;
  top: 10vh;
  position: fixed;
  right: 0;
  display: flex;
  z-index: 10;
  color: #fefefe;

  @media screen and (max-width: 600px) {
    top: 7vh;
  }
`;

const RightSide = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2vmax 1.5vmax;
  background-color: rgb(0, 0, 0);

  @media screen and (max-width: 600px) {
    width: 60%;
  }
`;

const ListItems = styled.div``;

const ListItem = styled.div`
  padding: 1vmax;
  font-size: 1.2vmax;
  color: rgb(150, 150, 150);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s linear;
  display: flex;
  gap: 0.5vmax;
  align-items: center;

  &:hover {
    background-color: rgb(30, 30, 30);
    color: #fefefe;
  }
`;

const Logout = styled.button`
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

const LeftSide = styled.div`
  width: 75%;
  background-color: rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 600px) {
    width: 40%;
  }
`;

const ListBox = ({ accountToggle, setAccountToggle }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Container>
      <LeftSide onClick={() => setAccountToggle(!accountToggle)}></LeftSide>
      <RightSide>
        <ListItems>
          <ListItem>
            <ManageAccountsIcon />
            Account
          </ListItem>
          <ListItem>
            <SecurityIcon />
            Privacy
          </ListItem>
          <ListItem>
            <HelpIcon />
            Help
          </ListItem>
        </ListItems>
        <Logout onClick={handleLogout}>Logout</Logout>
      </RightSide>
    </Container>
  );
};

export default ListBox;
