import express from 'express';
import * as userController from '../controllers/userController.js'

export const userRouter = express.Router();

userRouter.route('/users')
    .post(userController.createNewUser)
    .get(userController.findUsers)


userRouter.route('/users/:id')
    .get(userController.findUserById)
    .delete(userController.deleteUserById)
    .put(userController.updateUserById)