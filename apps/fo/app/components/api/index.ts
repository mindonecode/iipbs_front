import { DEV_URL_FO } from "./config/env";

export const getFectch = async (url: string) => {
  const response = await fetch( DEV_URL_FO+url , {
    method: "GET",
    headers: {
        accept: "application/json",
    },
  });
  if(!response.ok) {
    throw new Error(`오류 발생: ${response.status}`);
  }
  const res =  await response.json()
  return res.data;
}

export const postFectch = async (url: string, params: any) => {
  const response = await fetch(DEV_URL_FO+url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  if(!response.ok) {
    throw new Error(`오류 발생: ${response.status}`);
  }
  return response;
}

export const putFectch = async (url: string, params: any) => {
  const response = await fetch(DEV_URL_FO+url, {
    method: "PUT",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  if(!response.ok) {
    throw new Error(`오류 발생: ${response.status}`);
  }
  return response;
}

export const deleteFectch = async (url: string, params: any) => {
  const response = await fetch(DEV_URL_FO+url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  if(!response.ok) {
    throw new Error(`오류 발생: ${response.status}`);
  }
  return response;
}   