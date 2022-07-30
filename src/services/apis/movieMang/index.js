import axios from "axios";

export async function requestAxios(method = "get", url, params, body) {
  let response;

  const accessToken = localStorage.getItem("Is");

  const header = { Authorization: "Bearer " + accessToken };

  try {
    response = await axios({
      method: method,
      headers: header,
      url: process.env.REACT_APP_MOVIE_MANG_BACK_URL + url,
      params: params,
      data: body,
    });

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
