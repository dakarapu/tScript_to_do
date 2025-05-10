import {Request, Response} from 'express';
import { IUser } from '../models/userModel.js';
import * as userOperation from '../operations/userOperation.js';

export async function createNewUser(req: Request, res: Response){
    const data = req.body;
    console.log('data ===>>>', data)
    const user = await userOperation.createUser(data);
    res.status(201).json(user);
}







// import { User, UserManager, Person } from '../operations/userOperation.js';
  
// const userManager = new UserManager();

// export function getUsers(): User[] {
//     const usersList = userManager.getUsers();
//     return usersList;
// }

// export function createUser(user: User) {
//     const res = userManager.createUser(user);
//     return res;
// }

// export function getUserById(id: number) {
//     const user = userManager.getUserById(id);
//     return user;
// }

// export function updateUserById(id: number, data: User) {
//     const user = userManager.updateUserById(id, data)
//     return user;
// }

// export function deleteUserById(id: number) {
//     const user = userManager.deleteUserById(id);
//     return user;
// }