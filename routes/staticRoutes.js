import express from "express"
import { handleAuthorLoginView, handleAuthorSigninView, handleAuthorView, handleHomeView } from "../controllers/staticControls.js";

const staticRoute = express.Router()

staticRoute.get('/', handleHomeView)
staticRoute.get('/authorView', handleAuthorView)
staticRoute.get('/authorSignin', handleAuthorSigninView)
staticRoute.get('/authorLogin', handleAuthorLoginView)



export default staticRoute;
