import mongoose, { Schema, Document } from 'mongoose';

export enum Roles {
    'admin' = 'Admin',
    'moderator' = 'Moderator',
    'user' = 'User',
    'guest' = 'Guest'
}

export interface IUser extends Document {
    fname: string, lname: string, role: Roles, readonly empId: number, readonly createdAt?: Date, updatedAt?: Date
}

const userSchema: Schema<IUser> = new Schema(
    {
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        role: { type: String, required: true },
        empId: { type: Number, required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;
