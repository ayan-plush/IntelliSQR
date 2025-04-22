import express from 'express'
import  cookieParser  from 'cookie-parser'
import sanitizedConfig from './config'
import config from "./config";
import userRouter from './routes/userRoutes';
import cors from "cors";


const app = express()

app.use(cors({
    origin: "http://localhost:5173", // frontend origin
    credentials: true // allow cookies if you're using them
  }));
  

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//cookie middleWare
app.use(cookieParser())

app.use('/api', userRouter)

app.get('/',(req,res)=>{
    res.send("Hi")
})

const port = config.PORT


app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})