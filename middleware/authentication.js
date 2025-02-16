import { validateToken } from "../services/authorization.js";

export function checkForAuthentication(cookie){
    return(req, res, next)=>{

        const tokenCookieValue = req.cookies[cookieName];

        if(!tokenCookieValue) return next();

        try {
            const authorPayload = validateToken(tokenCookieValue)
            req.user = authorPayload
            
        } catch (error) {
            res.json({message: "authentication failure"})
        }
        return next();
    }
}