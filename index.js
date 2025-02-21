import 'dotenv/config';
import express from "express"
import path from 'path'
import methodOverride from "method-override"
import {dbConnect} from "./config.js"
import {checkForAuthentication, checkForUserAuthentication} from "./middleware/authentication.js"
import staticRoute from './routes/staticRoutes.js';
import authorRoute from './routes/authorRoutes.js';
import authorCreation from './routes/authorCreation.js';
import cookieParser from 'cookie-parser';
import userCreation from './routes/userCreation.js';
import bookRoute from './routes/bookRoutes.js'

const app = express()

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(methodOverride("_method"))
app.use(checkForAuthentication("token"))
app.use(checkForUserAuthentication("user"))
app.use(express.static(path.resolve('./public')))

app.use('/', staticRoute)
app.use('/api', authorRoute)
app.use('/author', authorCreation)
app.use('/user', userCreation)
app.use('/book', bookRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{console.log(`App running on port: ${PORT}`)})
dbConnect(process.env.MONGO_URL)
.then(()=>{console.log("MongoDB connected")})
.catch((err)=>console.log(err.message))
