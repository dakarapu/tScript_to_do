import { User, UserManager, Person } from '../models/userModel.js';

const userManager = new UserManager();

export function getUsers(): User[] {
    const usersList = userManager.getUsers();
    return usersList;
}

export function createUser(user: User) {
    const res = userManager.createUser(user);
    return res;
}

export function getUserById(id: number) {
    const user = userManager.getUserById(id);
    return user;
}

export function updateUserById(id: number, data: User) {
    const user = userManager.updateUserById(id, data)
    return user;
}

export function deleteUserById(id: number) {
    const user = userManager.deleteUserById(id);
    return user;
}