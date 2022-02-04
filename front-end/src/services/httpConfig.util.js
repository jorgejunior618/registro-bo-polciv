import axios from "axios";

const BASE_URL = 'http://localhost:';

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

async function post(params, endpoint, port = '5000') {
  try {
    return await axios.post(
      BASE_URL + port + endpoint,
      params,
      {
        defaultHeaders,
      }
    )
  } catch (error) {
    return Promise.reject(error);
  }
}

async function put(params, endpoint, port = '5000') {
  try {
    return await axios.put(
      BASE_URL + port + endpoint,
      params,
      {
        defaultHeaders,
      }
    )
  } catch (error) {
    return Promise.reject(error);
  }
}

async function get(endpoint, port = '5000') {
  try {
    return await axios.get(
      BASE_URL + port + endpoint,
      {
        defaultHeaders,
      }
    )
  } catch (error) {
    return Promise.reject(error);
  }
}

async function remove(params, endpoint, port = '5000') {
  try {
    return await axios.delete(
      BASE_URL + port + endpoint,
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
