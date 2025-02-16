import express from "express"
import { handleAuthorCreation, handleAuthorSignin } from "../controllers/authorCredentialControls.js"

const authorCreation = express.Router()

authorCreation.post('/signup', handleAuthorCreation)
authorCreation.post('/login', handleAuthorSignin)


export default authorCreation