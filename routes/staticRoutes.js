import express from "express"
import { handleAuthorHome, handleAuthorLoginView, handleAuthorSigninView, 
handleAuthorView, handleGetStarted, handleHomeView, 
handleUserSignup, handleUserLogin, 
handleUserHome, handleCreateBook, handleViewBook,
handleSingleViewBook,
handlePostedBooks,
handleSingleBook} from "../controllers/staticControls.js";
 

const staticRoute = express.Router()

staticRoute.get('/', handleHomeView)

//Author's static routes
staticRoute.get('/authorProfile', handleAuthorView)
staticRoute.get('/authorHome', handleAuthorHome)
staticRoute.get('/authorSignup', handleAuthorSigninView)
staticRoute.get('/authorLogin', handleAuthorLoginView)
staticRoute.get('/getStarted', handleGetStarted)
staticRoute.get('/postedBooks', handlePostedBooks)
staticRoute.get('/update/:id', handleSingleBook)

//User's static routes
staticRoute.get('/userLogin', handleUserLogin)
staticRoute.get('/userSignup', handleUserSignup)
staticRoute.get('/userHome', handleUserHome)


//Book's static routes
staticRoute.get('/createBook', handleCreateBook)
staticRoute.get('/viewBooks', handleViewBook)
staticRoute.get('/public/uploads/:filename', handleSingleViewBook)

export default staticRoute;
