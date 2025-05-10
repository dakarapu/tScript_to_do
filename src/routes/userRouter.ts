import express from 'express';
import * as userController from '../controllers/userController.js'

export const userRouter = express.Router();

userRouter.route('/users')
    // .get((req, res) => {
    //     const users = userController.getUsers();
    //     res.status(200).send(users);
    // })
    // .post((req, res) => {
    //     const data = req.body;
    //     const user = userController.createNewUser(data);
    //     //res.status(200).send(user);
    // })
    .post(userController.createNewUser)


// userRouter.route('/users/:id')
//     .get((req, res) => {
//         const id = req.params.id;
//         if (id && typeof id === 'number') {
//             const user = userController.getUserById(id);
//             res.status(200).send(user);
//         } else {
//             res.status(404).send(`No user found`)
//         }
//     })
//     .put((req, res) => {
//         const id = req.params.id;
//         const data = req.body;
//         if (id && typeof id === 'number') {
//             const user = userController.updateUserById(id, data)
//             res.status(200).send(user);
//         } else {
//             res.status(404).send(`No user found`)
//         }
//     })
//     .delete((req, res) => {
//         const id = req.params.id;
//         if (id && typeof id === 'number') {
//             const user = userController.deleteUserById(id)
//             res.status(200).send(user);
//         } else {
//             res.status(404).send(`No user found`)
//         }
//     })