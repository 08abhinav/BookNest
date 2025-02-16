import express from "express"
import { handleAuthorLoginView, handleAuthorSigninView, handleAuthorView, handleGetStarted, handleHomeView } from "../controllers/staticControls.js";

const staticRoute = express.Router()

staticRoute.get('/', handleHomeView)
staticRoute.get('/authorView', handleAuthorView)
staticRoute.get('/authorSignin', handleAuthorSigninView)
staticRoute.get('/authorLogin', handleAuthorLoginView)
staticRoute.get('/getStarted', handleGetStarted)



export default staticRoute;
