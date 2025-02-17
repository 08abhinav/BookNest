import { validateToken, validateUserToken } from "../services/authorization.js";

export function checkForAuthentication(cookieName){
    return(req, res, next)=>{
        const tokenCookieValue = req.cookies[cookieName];
        if(!tokenCookieValue) return next();
        try {
            const authorPayload = validateToken(tokenCookieValue)
            req.author = authorPayload
            
        } catch (error) {
            res.json({message: "authentication failure"})
        }
        return next();
    }
}

export function checkForUserAuthentication(userCookie){
    return (req, res, next)=>{
        const userTokenCookieValue = req.cookies[userCookie]
        if(!userTokenCookieValue) return next();

        try {
            const userPayload = validateUserToken(userTokenCookieValue)
            req.user = userPayload
        } catch (error) {
            res.json({message: "authentication failure"})
        }
        return next()
    }
}