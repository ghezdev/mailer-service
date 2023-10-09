interface IHttpException {
  error: any;
  message: string;
  code?: number;
}

class HttpException extends Error {
  public error: Error;
  public code: number;

  constructor({ error, message, code = 500 }: IHttpException) {
    super(message);
    this.error = error;
    this.name = 'HttpException';
    this.code = code;
  }
}

export { HttpException };
