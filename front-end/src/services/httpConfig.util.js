import axios from "axios";

const BASE_URL = 'http://localhost:5000';

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

async function post(params, endpoint) {
  try {
    return await axios.post(
      BASE_URL + endpoint,
      params,
      {
        defaultHeaders,
      }
    )
  } catch (error) {
    return Promise.reject(error);
  }
}

async function put(params, endpoint) {
  try {
    return await axios.put(
      BASE_URL + endpoint,
      params,
      {
        defaultHeaders,
      }
    )
  } catch (error) {
    return Promise.reject(error);
  }
}

async function get(endpoint) {
  try {
    return await axios.get(
      BASE_URL + endpoint,
      {
        defaultHeaders,
      }
    )
  } catch (error) {
    return Promise.reject(error);
  }
}

async function remove(params, endpoint) {
  try {
    return await axios.delete(
      BASE_URL + endpoint,
      {
        params,
        defaultHeaders,
      }
    )
  } catch (error) {
    return Promise.reject(error);
  }
}
const httpConfig = {
  post,
  put,
  get,
  remove,
};
export default httpConfig;
