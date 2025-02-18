import express from "express"
import { uploads } from "../controllers/storageControls.js"
import { handleBookCreation } from "../controllers/booksControls.js"
const bookRoute = express.Router()

bookRoute.post('/uploads', uploads.single("file"), handleBookCreation)


export default bookRoute;