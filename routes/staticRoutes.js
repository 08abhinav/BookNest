import express from "express"
import { handleAuthorHome, handleAuthorLoginView, handleAuthorSigninView, 
handleAuthorView, handleGetStarted, handleHomeView, 
handleUserSignup, handleUserLogin } from "../controllers/staticControls.js";
 

const staticRoute = express.Router()

staticRoute.get('/', handleHomeView)

//Author's static routes
staticRoute.get('/create', handleAuthorView)
staticRoute.get('/authorHome', handleAuthorHome)
staticRoute.get('/authorSignup', handleAuthorSigninView)
staticRoute.get('/authorLogin', handleAuthorLoginView)
staticRoute.get('/getStarted', handleGetStarted)


//User's static routes
staticRoute.get('/userLogin', handleUserLogin)
staticRoute.get('/userSignup', handleUserSignup)


export default staticRoute;
