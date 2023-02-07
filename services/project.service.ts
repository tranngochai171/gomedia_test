import { ErrorConstants } from 'constants/error.constant';
import { HttpStatusCode } from 'constants/http-status-code.constant';
import { BaseError } from 'errors/base-error';
import promiseHelper from '../helpers/promise.helper';
import backendAPIClient from '../utils/backend-api.util';

const transformQueryParamsIntoQueryString = (queryParams: any) => {
  let query = '';
  for (const [key, value] of Object.entries(queryParams)) {
    query += `${key}=${encodeURIComponent(value as string)}&`;
  }

  return query;
};

class CustomerService {
  async getProjects(restQuery: any): Promise<any> {
    try {
      const query = transformQueryParamsIntoQueryString(restQuery);
      const [response, bcError] = await promiseHelper.handlePromise(
        backendAPIClient.get(`/projects?${query}`),
      );
      if (bcError) {
        throw new BaseError(
          HttpStatusCode.BAD_REQUEST,
          ErrorConstants.GET_PROJECTS_ERROR,
        );
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new CustomerService();
