import * as Service from "@api/movieMang/BaseService";

export const login = async (method, url, body) => {
  Service.serviceConfig.method = method;
  Service.serviceConfig.url = url;
  Service.serviceConfig.body = body;

  const response = await Service.axiosRequest();
  return response;
};
