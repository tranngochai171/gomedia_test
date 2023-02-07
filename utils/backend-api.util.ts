import { AxiosRequestConfig } from 'axios';

const axios = require('axios').default;
const SERVER_URL = process.env.SERVER_URL;
class BackendAPIClient {
  get(urlSuffix: string, config: AxiosRequestConfig = {}) {
    return axios.get(SERVER_URL + urlSuffix, config);
  }

  post(urlSuffix: string, data: any = {}, config: AxiosRequestConfig = {}) {
    return axios.post(SERVER_URL + urlSuffix, data, config);
  }

  put(urlSuffix: string, data: any = {}, config: AxiosRequestConfig = {}) {
    return axios.put(SERVER_URL + urlSuffix, data, config);
  }

  delete(urlSuffix: string, data: any = {}, config: AxiosRequestConfig = {}) {
    return axios.delete(SERVER_URL + urlSuffix, data, config);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new BackendAPIClient();
