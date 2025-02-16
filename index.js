import 'dotenv/config';
import express from "express"
import {dbConnect} from "./config.js"
import path from 'path'
import staticRoute from './routes/staticRoutes.js';
import authorRoute from './routes/authorRoutes.js';
import authorCreation from './routes/authorCreation.js';

const app = express()

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', staticRoute)
app.use('/author-api', authorRoute)
app.use('/author', authorCreation)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{console.log(`App running on port: ${PORT}`)})
dbConnect(process.env.MONGO_URL)
.then(()=>{console.log("MongoDB connected")})
.catch((err)=>console.log(err.message))
