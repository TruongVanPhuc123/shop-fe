import { createContext, useEffect, useReducer } from "react";
import apiService from "@/app/apiService";
import { isValidToken } from "../utils/jwt";
import Swal from "sweetalert2";

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const LOGOUT = "LOGOUT";
const INITIALIZE = "ISINITIALIZED";

const AuthContext = createContext({ ...initialState });

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case INITIALIZE:
      return {
        ...state,
        isInitialized: true,
        isAuthenticated: payload.isAuthenticated,
        user: payload.data,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
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

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("access_token");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const response = await apiService.get("/users/me");
          const { data } = response;

          dispatch({
            type: INITIALIZE,
            payload: { isAuthenticated: true, data },
          });
        } else {
          setSession(null);

          dispatch({
            type: INITIALIZE,
            payload: { isAuthenticated: false, user: null },
          });
        }
      } catch (err) {
        console.error(err);

        setSession(null);
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async ({ email, password }, callback) => {
    const response = await apiService.post("/auth/login", { email, password });
    const { user, accessToken } = response.data;

    setSession(accessToken);
    dispatch({ type: LOGIN_SUCCESS, payload: { user } });
    callback();
    Swal.fire({
      text: `Welcome back ${user.name}!`,
      icon: "success",
    });
  };

  const register = async (
    { name, email, password, comfirmPassword },
    callback
  ) => {
    const response = await apiService.post("/auth/register", {
      name,
      email,
      password,
      comfirmPassword,
    });
    const { user, accessToken } = response.data;

    setSession(accessToken);
    dispatch({ type: REGISTER_SUCCESS, payload: { user } });
    callback();
    Swal.fire({
      text: `${response.message} !`,
      icon: "success",
    });
  };

  const logout = async (callback) => {
    setSession(null);
    dispatch({ type: LOGOUT });
    callback();
    Swal.fire({
      title: "Logout success",
      text: "See you later!",
      icon: "success",
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
