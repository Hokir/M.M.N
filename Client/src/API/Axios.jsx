import axios from "axios";

const baseURL = "http://localhost:3001";

export const get = axios.create({
  baseURL: baseURL,
  method: "get",
});

export const post = axios.create({
  baseURL: baseURL,
  method: "post",
});

export const put = axios.create({
  baseURL: baseURL,
  method: "put",
});

export const del = axios.create({
  baseURL: baseURL,
  method: "delete",
});
