import axios from "axios";
import * as Constants from "@constant";

export async function requestAxios(method = "get", url, params, body) {
  let response;

  const finParams = {
    api_key: Constants.TM_API_KEY,
    language: "ko-KR",
    ...params,
  };

  try {
    response = await axios({
      method: method,
      url: Constants.TM_MOVIE_URL + url,
      params: finParams,
      data: body,
    });
    console.log(response);
    return response;
  } catch (e) {
    let errorResponse;
    if (e.response) {
      if (e.response.status === 422) {
        errorResponse = { message: "더 이상 검색 결과가 없습니다." };
      } else if (e.response.status === 404) {
        errorResponse = {
          message: "잘못된 요청입니다.",
        };
      } else if (e.response.status === 401) {
        errorResponse = {
          message: "조회 권한이 없습니다.",
        };
      } else {
        errorResponse = {
          message: "서버에 문제가 발생했습니다. 잠시 뒤 다시 시도해 주세요.",
        };
      }
    }
    return errorResponse;
    console.log(e.response);
  }
}
