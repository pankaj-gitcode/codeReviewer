import express from 'express'
import 'dotenv/config'
import reviewRouter from './router/router.js';

const app = express();
const PORT = 2000;

// middleware
app.use(express.json());

//endpoints
app.use('/ai', reviewRouter);   

// express server check
app.get('/', (req,res)=>{
    res.status(200).json({
        success:true,
        message: 'Server is up'
    })
})

// PORT lostening
app.listen(PORT, (req,res)=>console.log(`Listening PORT is ${PORT} |  http://localhost:2000`))