import express from "express"
import { handleAuthorHome, handleAuthorLoginView, handleAuthorSigninView, handleAuthorView, handleGetStarted, handleHomeView } from "../controllers/staticControls.js";

const staticRoute = express.Router()

staticRoute.get('/', handleHomeView)
staticRoute.get('/create', handleAuthorView)
staticRoute.get('/authorHome', handleAuthorHome)
staticRoute.get('/authorSignup', handleAuthorSigninView)
staticRoute.get('/authorLogin', handleAuthorLoginView)
staticRoute.get('/getStarted', handleGetStarted)



export default staticRoute;
