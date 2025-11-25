import { Response, Request, NextFunction } from 'express';
import AppError from 'src/error/app-error';

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'Error',
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: 'Error',
    message: 'Internal server error',
    error: JSON.stringify(err),
  });
}