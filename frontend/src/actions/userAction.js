import axios from "axios";

//ISREGISTERED USER
export const isRegisteredUser = (email) => async (dispatch) => {
  try {
    dispatch({
      type: "isRegisteredRequest",
    });

    const { data } = await axios.post(
      "/api/v1/isregistered",
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "isRegisteredSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "isRegisteredFailure",
      payload: error.response.data.message,
    });
  }
};

//REGISTER USER
export const registerUser =
  (name, username, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "RegisterRequest",
      });

      const { data } = await axios.post(
        "/api/v1/register",
        { name, username, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "RegisterSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message,
      });
    }
  };

//LOGIN USER
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post(
      "/api/v1/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

//LOGOUT USER
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutUserRequest",
    });

    await axios.get("/api/v1/logout");

    dispatch({
      type: "LogoutUserSuccess",
    });
  } catch (error) {
    dispatch({
      type: "LogoutUserFailure",
      payload: error.response.data.message,
    });
  }
};
