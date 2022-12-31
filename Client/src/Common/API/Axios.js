import axios from "axios";

const BASE_URL = "http://localhost:3001";

const getRequest = async (path) => {
  try {
    const { data } = await axios.get(BASE_URL + path);
    return data;
  } catch (e) {
    return e.response.data;
  }
};

const postRequest = async (path, payload) => {
  try {
    const { data } = await axios.post(BASE_URL + path, payload);
    return data;
  } catch (e) {
    return e.response.data;
  }
};

const putRequest = async (path, payload) => {
  try {
    const { data } = await axios.put(BASE_URL + path, payload);
    return data;
  } catch (e) {
    return e.response.data;
  }
};

const patchRequest = async (path, payload) => {
  try {
    const { data } = await axios.patch(BASE_URL + path, payload);
    return data;
  } catch (e) {
    return e.response.data;
  }
};

const deleteRequest = async (path) => {
  try {
    const { data } = await axios.delete(BASE_URL + path);
    return data;
  } catch (e) {
    return e.response.data;
  }
};

export { getRequest, postRequest, putRequest, patchRequest, deleteRequest };
