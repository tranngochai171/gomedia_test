import { ErrorConstants } from 'constants/error.constant';
import { HttpStatusCode } from 'constants/http-status-code.constant';
import { BaseError } from 'errors/base-error';
import promiseHelper from 'helpers/promise.helper';
import backendAPIClient from '../utils/backend-api.util';

class LeadService {
  async submitEnquiry(payload: any): Promise<any> {
    try {
      const [response, bcError] = await promiseHelper.handlePromise(
        backendAPIClient.post('/leads', payload),
      );
      if (bcError) {
        throw new BaseError(
          HttpStatusCode.BAD_REQUEST,
          ErrorConstants.SUBMIT_ENQUIRY_ERROR,
        );
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new LeadService();
