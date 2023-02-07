import commonConstants from 'constants/common.constant';
import { ErrorConstants } from 'constants/error.constant';
import { HttpStatusCode } from 'constants/http-status-code.constant';
import { BaseError } from 'errors/base-error';
import helper200 from 'helpers/helper.200';
import helper405 from 'helpers/helper.405';
import { NextApiRequest, NextApiResponse } from 'next';
import leadService from 'services/lead.service';
import errorHandler from '../../../../errors/error-handler';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    switch (req.method) {
      case commonConstants.POST:
        const { name, mobile_number, email, source } = req.body;
        if (!name || !mobile_number || !email || !source) {
          console.error(
            `Invalid Request (Missing name): ${name} or (Missing mobile_number): ${mobile_number} or (Missing email): ${email} or (Missing source): ${source}`,
          );
          throw new BaseError(
            HttpStatusCode.BAD_REQUEST,
            ErrorConstants.BAD_REQUEST,
          );
        }
        const responseData = await leadService.submitEnquiry(req.body);
        helper200.handle(res, responseData);
        break;
      default:
        // Method Not Allowed
        helper405.handle(res);
        break;
    }
  } catch (error) {
    errorHandler.send(error, res);
  }
}
