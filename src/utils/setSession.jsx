import apiService from "@/app/apiService";

const setSession = async (accessToken) => {
  if (accessToken) {
    window.localStorage.setItem("access_token", accessToken);
    apiService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    window.localStorage.removeItem("access_token");
    delete apiService.defaults.headers.common.Authorization;
  }
};

export default setSession;
