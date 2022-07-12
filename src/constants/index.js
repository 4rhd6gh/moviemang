export const TOKEN_KEY = "token";
export const TM_MOVIE_URL = `https://api.themoviedb.org/3`;

export const MOVIE_MANG_URL = "http://35.203.6.209:8000";
// export const MOVIE_MANG_URL = "http://localhost:8000";
export const DEFAULT_TIME_OUT = 2500;
export const TM_MOVIE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

//TODO api key env로 바꿔야함
export const TM_API_KEY = "4d48c467d91cd60bbd7ef0bffa7b1a73";

// 카카오 로그인 구현 시 필요한 키값
const KAKAO_CLIENT_ID = "7b3b8e4bac82885a106b3d0eac76cd86";
const KAKAO_REDIRECT_URI = "http://localhost:3000/oauth/kakao";
const KAKAO_CLIENT_SECRET = "6LX0v5unJyJuRvSwlnQejgoqE3FgzBFX";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

// 네이버 로그인 구현 시 필요한 키값
const NAVER_CLIENT_ID = "P9wXmSD_A0d2dUt21vm0";
const NAVER_CLIENT_SECRET = "YIYyWZR319";
const NAVER_REDIRECT_URI = "http://localhost:3000/oauth/naver";

const STATE_STRING = encodeURI("accc", "UTF-8");

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${NAVER_REDIRECT_URI}`;

// 구글 로그인 구현 시 필요한 키값
export const GOOGLE_CLIENT_ID =
  "396499209310-e9dkj697kobuqsnhsicgjkoj2ogt6n63.apps.googleusercontent.com";

export const GOOGLE_CLIENT_SECRET = "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";
