import express from 'express';
import { userRouter } from './routes/userRouter.js'

const app = express();
app.use(userRouter);

app.get('/homepage', (req, res) => {
    res.status(200).send('Welcome to homepage!');
});


app.listen(3008);






