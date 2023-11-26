import dotenv from 'dotenv';
dotenv.config();
import {fileURLToPath} from 'url';
import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';
import { dbconnect } from './config/database.config.js';
import path, { dirname } from 'path';
dbconnect();





const app = express();
app.use(express.json());

app.use(cors({
    credentais:true,
    origin:['http://localhost:3001'],
}));


app.use('/api/foods',foodRouter);
app.use('/api/users',userRouter);
app.use('/api/orders', orderRouter);

const publicFolder = path.join(__dirname, 'public');
app.use(express.static(publicFolder));


  

const PORT = 5000;
app.listen(PORT, ()=> {
  console.log('listening on port'+PORT);
});
