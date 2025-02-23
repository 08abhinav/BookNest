import express from "express"
import { uploads } from "../controllers/storageControls.js"
import { handleBookCreation, handleBookUpdation } from "../controllers/booksControls.js"
const bookRoute = express.Router()

bookRoute.post('/uploads', uploads.single("link"), handleBookCreation)
bookRoute.post("/updateBook/:id", uploads.single("pdf"), handleBookUpdation);

export default bookRoute;