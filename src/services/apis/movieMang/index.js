import axios from "axios";
import * as Constants from "@constant";

const mm_instance = axios.create();

mm_instance.defaults.baseURL = Constants.TM_MOVIE_URL;
mm_instance.defaults.timeout = Constants.DEFAULT_TIME_OUT;

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

// request interceptor
mm_instance.interceptors.request.use(function (config) {
  //TODO : request interceptor에서 token을 client 단에서 한번 확인한다. 1. 메모리단 2. 쿠키
  return config;
});

// response interceptor HTTP error handling
mm_instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.status === 404) {
    } else if (error.status === 401) {
    } else if (error.status === 403) {
    } else if (error.status === 500) {
    } else {
    }
  }
);
