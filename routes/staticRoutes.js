import express from "express"
import { checkForAuthentication, checkForUserAuthentication } from "../middleware/authentication.js";
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
staticRoute.get('/', handleHomeView)
staticRoute.get('/getStarted', handleGetStarted)

//Author's static routes
staticRoute.get('/authorProfile', checkForAuthentication("token"),handleAuthorView)
staticRoute.get('/authorHome', checkForAuthentication("token"),handleAuthorHome)
staticRoute.get('/authorSignup', checkForAuthentication("token"),handleAuthorSigninView)
staticRoute.get('/authorLogin', checkForAuthentication("token"),handleAuthorLoginView)
staticRoute.get('/profile', checkForAuthentication("token"),handleProfile)



//User's static routes
staticRoute.get('/userLogin', checkForUserAuthentication("user"),handleUserLogin)
staticRoute.get('/userSignup', checkForUserAuthentication("user"),handleUserSignup)
staticRoute.get('/userHome', checkForUserAuthentication("user"),handleUserHome)


//Book's static routes
staticRoute.get('/createBook', checkForAuthentication("token"),handleCreateBook)
staticRoute.get('/viewBooks', handleViewBook)
staticRoute.get('/postedBooks', checkForAuthentication("token"),handlePostedBooks)
staticRoute.get('/update/:id', checkForAuthentication("token"),handleSingleBook)
staticRoute.get('/public/uploads/:filename', checkForAuthentication("token"),handleSingleViewBook)

export default staticRoute;
