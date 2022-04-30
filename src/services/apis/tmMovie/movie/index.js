import * as Service from "@api/tmMovie/BaseService";

export const getMovieList = async (method, url, params = {}, page = 1) => {
  Service.serviceConfig.method = method;
  Service.serviceConfig.url = url;
  Service.serviceConfig.body = params;
  Service.serviceConfig.page = page;

  const response = await Service.axiosRequest();
  return response;
};
