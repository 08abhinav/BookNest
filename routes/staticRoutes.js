import express from "express"
import { checkForAnyAuthentication, checkForAuthentication, checkForUserAuthentication } from "../middleware/authentication.js";
import cookieParser from 'cookie-parser';
import { handleAuthorHome, handleAuthorLoginView, handleAuthorSigninView, 
handleAuthorView, handleGetStarted, handleHomeView, 
handleUserSignup, handleUserLogin, 
handleUserHome, handleCreateBook, handleViewBook,
handleSingleViewBook,
handlePostedBooks,
handleSingleBook,
handleProfile} from "../controllers/staticControls.js";
 

const staticRoute = express.Router()
staticRoute.use(cookieParser())

//Author's static routes
staticRoute.get('/', handleHomeView)
staticRoute.get('/getStarted', handleGetStarted)
staticRoute.get('/authorSignup', handleAuthorSigninView)
staticRoute.get('/authorLogin', handleAuthorLoginView)

staticRoute.get('/authorProfile', checkForAuthentication("token"),handleAuthorView)
staticRoute.get('/authorHome', checkForAuthentication("token"),handleAuthorHome)
staticRoute.get('/profile', checkForAuthentication("token"),handleProfile)



//User's static routes
staticRoute.get('/userLogin', handleUserLogin)
staticRoute.get('/userSignup', handleUserSignup)
staticRoute.get('/userHome', checkForUserAuthentication("user"),handleUserHome)


//Book's static routes
staticRoute.get('/viewBooks', checkForAnyAuthentication("token", "user"),handleViewBook)
staticRoute.get('/createBook', checkForAuthentication("token"),handleCreateBook)
staticRoute.get('/postedBooks', checkForAuthentication("token"),handlePostedBooks)
staticRoute.get('/update/:id', checkForAuthentication("token"),handleSingleBook)
staticRoute.get('/public/uploads/:filename', checkForAuthentication("token"),handleSingleViewBook)

export default staticRoute;
