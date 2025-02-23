import { validateToken, validateUserToken } from "../services/authorization.js";

export function checkForAuthentication(cookieName){
    return(req, res, next)=>{
        const publicRoutes = ['/', '/getStarted'];
        if (publicRoutes.includes(req.originalUrl)) {
            return next();
        }

        const tokenCookieValue = req.cookies[cookieName];
        if(!tokenCookieValue) {
            return res.status(401).json({ message: "Authentication required" });
        }
        try {
            const authorPayload = validateToken(tokenCookieValue)
            if (!authorPayload || authorPayload.role !== "author") {
                return res.status(403).json({ message: "Access denied. Authors only." });
            }
            req.author = authorPayload
            return next();

        } catch (error) {
            return res.json({message: "authentication failure"})
        }
    }
}

export function checkForUserAuthentication(userCookie){
    return (req, res, next) => {
        const userTokenCookieValue = req.cookies[userCookie]
        if (!userTokenCookieValue) {
            return next();  
        }
        try {
            const userPayload = validateUserToken(userTokenCookieValue)
            if (!userPayload || !userPayload.role !== "user") {
                return res.status(403).json({ message: "Access denied. Authors only." });
            }
            req.user = userPayload  
            next();
        } catch (error) {
            return res.json({message: "authentication failure"});
        }
    }
}
