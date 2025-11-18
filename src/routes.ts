import express from 'express';
import { userRoutes } from './modules/users/routes/users.routes';

export const routes = express.Router();

routes.use('/users', userRoutes);




