import * as dotenv from 'dotenv';
import express from 'express';
import { userRouter } from './routes/userRouter.js'
import DB from './config/mongo.js'

dotenv.config();
const mongoUri: string | undefined = process.env.MONGO_URI;
const db = DB.getInstance();
if (mongoUri && typeof mongoUri === 'string') {
    db.connect(mongoUri);
}


const app = express();
app.use(userRouter);

app.get('/homepage', (req, res) => {
    res.status(200).send('Welcome to homepage!');
});


app.listen(3008);






