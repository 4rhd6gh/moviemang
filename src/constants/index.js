export const TOKEN_KEY = "token";
export const TM_MOVIE_URL = `https://api.themoviedb.org/3`;
export const MOVIE_MANG_URL =
  "http://ec2-3-37-55-77.ap-northeast-2.compute.amazonaws.com:8080";
export const DEFAULT_TIME_OUT = 2500;
export const TM_MOVIE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

//TODO api key env로 바꿔야함
export const TM_API_KEY = "4d48c467d91cd60bbd7ef0bffa7b1a73";

const KAKAO_CLIENT_ID = "7b3b8e4bac82885a106b3d0eac76cd86";
const KAKAO_REDIRECT_URI = "http://localhost:3000/oauth/kakao";
const KAKAO_CLIENT_SECRET = "6LX0v5unJyJuRvSwlnQejgoqE3FgzBFX";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

const NAVER_CLIENT_ID = "P9wXmSD_A0d2dUt21vm0";
const NAVER_CLIENT_SECRET = "YIYyWZR319";
const NAVER_REDIRECT_URI = "http://localhost:3000/oauth/naver";

const STATE_STRING = encodeURI("accc", "UTF-8");

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${NAVER_REDIRECT_URI}`;
