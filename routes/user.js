import express from 'express'
import { login, register } from '../controller/user.js';

const userRoutes = express.Router();

userRoutes.route("/register").post(register);
userRoutes.route("/login").get(login);

export default userRoutes;