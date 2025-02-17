import "dotenv/config"
import jwt from "jsonwebtoken"

const secret = process.env.SECRET
const userSecret = process.env.USER_SECRET


//Author's token creation
export function createToken(author){
    
    const payload = {
        _id: author._id,
        email: author.email,
    }

    const token = jwt.sign(payload, secret)
    return token
}

export function validateToken(token){
    const payload = jwt.verify(token, secret)
    return payload
}



//User's token creation
export function createUserToken(user){
   const userPayload = {
    _id: user._id,
    email: user.email
   } 

   const userToken = jwt.sign(userPayload, userSecret)
   return userToken
}

export function validateUserToken(userToken){
    const userPayload = jwt.verify(userToken, userSecret)
    return userPayload
}
