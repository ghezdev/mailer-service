import { Request, Response, NextFunction } from 'express';

import { HttpException } from '@utils/errors';

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof HttpException) {
    res.status(err.code).json(err.error);
  }

  res.status(500).json({ error: 'Internal server error' });
}

export default errorHandler;
