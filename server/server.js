import express from 'express'

const app = express();
const PORT = 2000;

app.use(express.json());

app.get('/', (req,res)=>{
    res.status(200).json({
        success:true,
        message: 'Server is up'
    })
})

app.listen(PORT, (req,res)=>console.log(`Listening PORT is ${PORT} |  http://localhost:2000`))