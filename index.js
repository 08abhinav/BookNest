import 'dotenv/config';
import express from "express"
import {dbConnect} from "./config.js"
import path from 'path'
import {checkForAuthentication, checkForUserAuthentication} from "./middleware/authentication.js"
import staticRoute from './routes/staticRoutes.js';
import authorRoute from './routes/authorRoutes.js';
import authorCreation from './routes/authorCreation.js';
import authorCreation from './routes/userCreation.js';
import cookieParser from 'cookie-parser';

const app = express()

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(checkForAuthentication("token"))
app.use(checkForUserAuthentication("user"))

app.use('/', staticRoute)
app.use('/author-api', authorRoute)
app.use('/author', authorCreation)
app.use('/user', userCreation)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{console.log(`App running on port: ${PORT}`)})
dbConnect(process.env.MONGO_URL)
.then(()=>{console.log("MongoDB connected")})
.catch((err)=>console.log(err.message))
