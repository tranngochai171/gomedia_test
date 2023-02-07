export class HttpStatusCode {
  static OK: number = 200;
  static NO_CONTENT: number = 204;

  static BAD_REQUEST: number = 400;
  static UNAUTHORIZED: number = 401;
  static UNAUTHENTICATED: number = 403;
  static NOT_FOUND: number = 404;
  static TOO_MANY_REQUESTS: number = 429;

  static INTERNAL_SERVER: number = 500;
}
