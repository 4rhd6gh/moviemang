import * as Service from "@api/movieMang/BaseService";

export const login = async (body) => {
  Service.serviceConfig.method = "POST";
  Service.serviceConfig.url = "/login";
  Service.serviceConfig.body = body;

  const response = await Service.axiosRequest();
  return response;
};

export const signup = async (body) => {
  Service.serviceConfig.method = "POST";
  Service.serviceConfig.url = "";
  Service.serviceConfig.body = body;

  const response = await Service.axiosRequest();
  return response;
};

export const checkDupEmail = async (body) => {
  Service.serviceConfig.method = "POST";
  Service.serviceConfig.url = "/member/emailcheck";
  Service.serviceConfig.body = body;

  const response = await Service.axiosRequest();
  return response;
};

export const checkDupNickname = async (body) => {
  Service.serviceConfig.method = "POST";
  Service.serviceConfig.url = "/member/nickcheck";
  Service.serviceConfig.body = body;

  const response = await Service.axiosRequest();
  return response;
};

export const requestEmailCert = async (body) => {
  Service.serviceConfig.method = "POST";
  Service.serviceConfig.url = "/member/email/certification";
  Service.serviceConfig.body = body;

  const response = await Service.axiosRequest();
  return response;
};
