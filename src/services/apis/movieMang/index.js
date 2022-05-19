import axios from "axios";
import * as Constants from "@constant";

export async function requestAxios(method = "get", url, params, body) {
  let response;

  try {
    response = await axios({
      method: method,
      url: Constants.MOVIE_MANG_URL + url,
      params: params,
      data: body,
    });
    console.log(response);
    return response;
  } catch (e) {
    let errorResponse;
    if (e.response) {
      if (e.response.status === 422) {
        errorResponse = { massege: "잘못된 요청입니다." };
      }
    }
    console.log(e.response);
  }
}
