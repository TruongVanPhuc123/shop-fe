import { createContext, useReducer } from "react";
import apiService from "@/app/apiService";
// import { isValidToken } from "@/utils/jwt";

const initialState = {
  isInnitialized: false,
  isAuthenticated: false,
  user: null,
};

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const LOGOUT = "LOGOUT";
const ISINITIALIZED = "ISINITIALIZED";

const AuthContext = createContext({ ...initialState });

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload.data,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: payload.data,
      };
    default:
      return state;
  }
};

const setSession = (accessToken) => {
  if (accessToken) {
    window.localStorage.setItem("access_token", accessToken);
    apiService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    window.localStorage.removeItem("access_token");
    delete apiService.defaults.headers.common.Authorization;
  }
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async ({ email, password }, callback) => {
    const response = await apiService.post("/auth/login", { email, password });
    const { data, accessToken } = response.data;

    setSession(accessToken);
    dispatch({ type: LOGIN_SUCCESS, payload: { data } });
    callback();
  };

  const register = async ({ name, email, password }, callback) => {
    const response = await apiService.post("/users", { name, email, password });
    const { data, accessToken } = response.data;

    setSession(accessToken);
    dispatch({ type: REGISTER_SUCCESS, payload: { data } });
    callback();
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
