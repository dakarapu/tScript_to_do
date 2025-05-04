import express from 'express';

export const userRouter = express.Router();

userRouter.route('/users')
    .get((req, res,) => {
        res.send('Hello users')
    })
