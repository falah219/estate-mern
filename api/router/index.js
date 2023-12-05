import express from 'express';
import apiUser from './user.router.js';
import apiAuth from './auth.router.js';

const routes  = express.Router();

routes.use('/api/user', apiUser);
routes.use('/api/auth', apiAuth);

export default routes;