import mongoose from 'mongoose';

class DB {
    private static instance: DB;
    private constructor() { }

    static getInstance(): DB {
        if (!DB.instance) {
            DB.instance = new DB();
        }
        return DB.instance;
    }

    async connect(uri: string): Promise<void> {
        try {
            await mongoose.connect(uri);
            console.log(`Connected to the database...`)
        } catch (e) {
            console.log(`Error connecting to database: ${e}`);
        }
    }

    async disconnect(): Promise<void> {
        try {
            await mongoose.disconnect();
            console.log(`Disconnected from the database...`)
        } catch (e) {
            console.log(`Error disconnecting from database: ${e}`);
        }
    }
}

export default DB;