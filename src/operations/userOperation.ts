import mongoose from 'mongoose';
import User, { Roles, IUser } from '../models/userModel.js';


export const createUser = async function (data: IUser) {
    try {
        const user = new User(data);
        await user.save();
        console.log("New user is created:", user)
        return user;
    } catch (e) {
        console.error("Error creating new user:", e);
    }
}






























// enum Roles {
//     'admin' = 'Admin',
//     'moderator' = 'Moderator',
//     'user' = 'User',
//     'guest' = 'Guest'
// }

// export interface Person {
//     fname: string, lname: string, role: string, readonly empId: number
// }

// export class User implements Person {
//     constructor(
//         public fname: string,
//         public lname: string,
//         public role: string,
//         public readonly empId: number,
//     ) {
//         this.fname = fname;
//         this.lname = lname;
//         this.role = role;
//         this.empId = empId;
//     }
// }


// export class UserManager {
//     public usersList: Map<number, User>;
//     constructor() {
//         this.usersList = new Map<number, User>();
//     }

//     getUserKeys(): Iterable<number> {
//         return this.usersList.keys();
//     }

//     getUsers(): User[] {
//         return Array.from(this.usersList.values());
//     }

//     createUser(user: User): string | Person | undefined {
//         const { fname, lname, role, empId } = user;
//         if (this.usersList.has(empId)) return `User already exists`
//         this.usersList.set(empId, user);
//         return this.usersList.get(empId);
//     }

//     getUserById(id: number): User | string {
//         if (!id) return `Provide a valid Id`

//         const user = this.usersList.get(id);
//         return user ? user : 'No user found with provided Id';
//     }

//     updateUserById(id: number, data: User): User | string | undefined {
//         const { fname, lname, role, empId } = data;
//         if (!id) return `Provide a valid Id`;

//         const user = this.usersList.get(id);
//         if (!user) return `No user found with provided Id`;

//         user.fname = fname;
//         user.lname = lname;
//         user.role = Roles.guest;

//         this.usersList.set(id, user);
//         return this.usersList.get(id);

//     }

//     deleteUserById(id: number): User[] | string {
//         if (!id || typeof id !== 'number') return `Provide a valid Id.`;
//         if (!this.usersList.has(id)) return `No user found with Id.`;
//         this.usersList.delete(id);

//         return Array.from(this.usersList.values());
//     }
// }



