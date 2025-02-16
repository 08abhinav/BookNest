import jwt from "jsonwebtoken"

const secret = "$ecret$uperM@N_69"

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