import axios from "axios";
import * as Constants from "@constant";

export async function requestAxios(method = "get", url, params, body) {
  let response;

  const accessToken = localStorage.getItem("Is");

  const header = { Authorization: "Bearer " + accessToken };

  try {
    response = await axios({
      method: method,
      headers: header,
      url: Constants.MOVIE_MANG_URL + url,
      params: params,
      data: body,
    });
    console.log(response);
    return response;
  } catch (e) {
    let errorResponse;
    if (e.response) {
      if (e.response.status === 401) {
        errorResponse = e.response.data;
      }
    }
    return errorResponse;
  }
}
