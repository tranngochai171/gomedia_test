import { HttpStatusCode } from '../constants/http-status-code.constant';
import { ErrorEntity } from './error.entity';

export class BaseError extends Error {
  public readonly httpCode: HttpStatusCode;
  public readonly errorEntity: ErrorEntity;

  constructor(httpCode: HttpStatusCode, error: ErrorEntity) {
    super(error.message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.errorEntity = new ErrorEntity(error.code, error.message);
    this.httpCode = httpCode;

    Error.captureStackTrace(this);
  }
}
