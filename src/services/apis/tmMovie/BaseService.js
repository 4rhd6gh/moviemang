import axios from "axios";
import * as Constants from "@constant";

const tm_instance = axios.create();

tm_instance.defaults.baseURL = Constants.TM_MOVIE_URL;
tm_instance.defaults.timeout = Constants.DEFAULT_TIME_OUT;

export const serviceConfig = {
  method: "GET",
  url: "",
  headers: "",
  body: {},
};

const accessToken = "";
const refreshToken = "";

//tm api에서는 안씀
export function setAccessToken(pAccessToken, pRefreshToken) {
  accessToken = pAccessToken;
  refreshToken = pRefreshToken;
}

tm_instance.interceptors.request.use();

tm_instance.interceptors.response.use();

// response interceptor HTTP error handling
tm_instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.status === 404) {
    } else if (error.status === 401) {
    } else {
    }
  }
);
