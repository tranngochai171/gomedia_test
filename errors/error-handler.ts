import { NextApiResponse } from 'next';
import { ErrorConstants } from '../constants/error.constant';
import { HttpStatusCode } from '../constants/http-status-code.constant';
import { BaseError } from './base-error';

const errorHandler = {
  send: (error: any, res: NextApiResponse) => {
    if (error instanceof BaseError) {
      // Error already logged
      res.status(error.httpCode as number).send(error.errorEntity);
    } else {
      res
        .status(HttpStatusCode.INTERNAL_SERVER)
        .send(ErrorConstants.SYSTEM_ERROR);
    }
  },
};

export default errorHandler;
