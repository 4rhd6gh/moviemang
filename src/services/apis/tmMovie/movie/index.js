import * as Service from "@api/tmMovie/BaseService";

export const getPopularMovieList = async (
  method,
  url,
  params = {},
  page = 1
) => {
  Service.serviceConfig.method = method;
  Service.serviceConfig.url = url;
  Service.serviceConfig.body = params;
  Service.serviceConfig.page = page;

  const response = await Service.axiosRequest();
  return response;
};

export const getSearchMovieList = async (
  method,
  url,
  params = {},
  page = 1,
  query = ""
) => {
  Service.serviceConfig.method = method;
  Service.serviceConfig.url = url;
  Service.serviceConfig.body = params;
  Service.serviceConfig.page = page;
  Service.serviceConfig.query = query;

  const response = await Service.axiosRequest();
  console.log(response);
  return response;
};
