import express from "express"
import { handleUserSignin, handleUserSignOut, handleUserSignUp } from "../controllers/userCredentials"

const userCreation = express.Router()

userCreation.post('/signup', handleUserSignUp)
userCreation.post('/signin', handleUserSignin)
userCreation.get('/signout', handleUserSignOut)

export default userCreation;
