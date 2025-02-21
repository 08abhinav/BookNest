import express from "express"
import { uploads } from "../controllers/storageControls.js"
import { handleBookCreation } from "../controllers/booksControls.js"
const bookRoute = express.Router()

bookRoute.post('/uploads', uploads.single("link"), handleBookCreation)
bookRoute.put('/update/:id', )
export default bookRoute;