export const TM_MOVIE_URL = `https://api.themoviedb.org/3`;
export const TM_MOVIE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `${process.env.REACT_APP_MOVIE_MANG_FRONT_URL}`;

const KAKAO_REDIRECT_URI = `${baseURL}/oauth/kakao`;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

const NAVER_REDIRECT_URI = `${baseURL}/oauth/naver`;
const STATE_STRING = encodeURI("accc", "UTF-8");
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${NAVER_REDIRECT_URI}`;

// 구글 로그인 구현 시 필요한 키값
export const GOOGLE_CLIENT_ID =
  "396499209310-e9dkj697kobuqsnhsicgjkoj2ogt6n63.apps.googleusercontent.com";

export const GOOGLE_CLIENT_SECRET = "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";
