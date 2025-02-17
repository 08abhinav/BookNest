import express from "express"
import { handleAuthorCreation, handleAuthorSignin, handleAuthorSignOut } from "../controllers/authorCredentialControls.js"

const authorCreation = express.Router()

authorCreation.post('/signup', handleAuthorCreation)
authorCreation.post('/login', handleAuthorSignin)
authorCreation.get('/signout', handleAuthorSignOut)

export default authorCreation