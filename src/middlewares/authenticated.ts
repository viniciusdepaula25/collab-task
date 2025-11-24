import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import {env} from 'src/env';

export async function authorized(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const autHeader = req.headers.authorization;
  const token = autHeader && autHeader.split(' ')[1];

  if(!token) throw new Error('Não autorizado');

  try {
    const decodeToken = jwt.verify(token, env.JWT_SECRET);

    const {id} = decodeToken as {id: number};

    req.user = {id};

    next();
  }catch (err) {
    throw new Error('Não autorizado');
  }
}