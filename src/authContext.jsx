import React, { useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";
import jwtDecode from "jwt-decode";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
  user: null,
  token: JSON.parse(localStorage.getItem("token")) || null,
  role: JSON.parse(localStorage.getItem("role")) || null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("role", JSON.stringify(action.payload.role));
      localStorage.setItem("isAuthenticated", JSON.stringify(true));

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  const role = localStorage.getItem("role");
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "LOGOUT",
    });
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token")) || "";
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedToken.exp < currentTime) {
        tokenExpireError(dispatch, "TOKEN_EXPIRED");
      } else {
        console.log("Token is still valid");
      }
    } else {
      tokenExpireError(dispatch, "TOKEN_EXPIRED");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
