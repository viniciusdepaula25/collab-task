import bcrypt from 'bcrypt';
import {User} from 'src/db/models/user.model';
import AppError from 'src/error/app-error';
import jwt from 'jsonwebtoken';
import { env } from 'src/env';

type createData = {
    name: string,
    email: string,
    password: string
}

export class UserServices {

  static async create({name, email, password}: createData) {
    if(!name) throw new Error('É necessario informar o nome.');
    if(!email) throw new Error('É necessario informar o email.');
    if(!password) throw new Error('É necessario infomar a senha.');

    const findUser = await User.findOne({
      where: {
        email
      }
    });
    if(findUser) throw new Error('Email já cadastrado.');

    const passwordHash = await bcrypt.hash(password, 8);

    await User.create({
      name,
      email,
      password: passwordHash
    });
    return {
      name,
      email
    };
  }

  static async login(email: string, password: string) {
    const user = await User.findOne({
      where: {
        email
      }
    });

    if(!user) throw new AppError('Email ou senha invalido.');

    const passwordMatch = await bcrypt.compare(
      password,
      user.getDataValue('password')
    );

    if(!passwordMatch) throw new AppError('Email ou senha invalido.');

    const token = jwt.sign(
      {
        id: user.getDataValue('id'),
      },
      env.JWT_SECRET,
      {
        expiresIn: '1d',
      },
    );

    const data = user.dataValues;

    return {
      token,
      user: {
        id: data.id,
        name: data.name,
        email: data.email
      }
    };
  }
}