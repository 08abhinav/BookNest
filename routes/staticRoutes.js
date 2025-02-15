import express from "express"
import { handleAuthorView, handleHomeView } from "../controllers/staticControls.js";

const staticRoute = express.Router()

staticRoute.get('/', handleHomeView)
staticRoute.get('/authorView', handleAuthorView)




export default staticRoute;
