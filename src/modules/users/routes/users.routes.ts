import { Router } from 'express';

import { UserController } from '../controllers/users-controller';

export const userRoutes = Router();

userRoutes.post('/create', UserController.create);
userRoutes.post('/login', UserController.login);