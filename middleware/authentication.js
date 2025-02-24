import { validateToken, validateUserToken } from "../services/authorization.js";

function isPublicRoute(url){
    const publicRoutes = ['/', '/getStarted', '/authorLogin', '/authorSignup', '/userSignup', '/userLogin']
    return publicRoutes.includes(url)
}


export function checkForAuthentication(cookieName){
    return(req, res, next)=>{
        if (isPublicRoute(req.originalUrl)){
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
        if (isPublicRoute(req.originalUrl)){
            return next();
        }

        const userTokenCookieValue = req.cookies[userCookie]
        if (!userTokenCookieValue) {
            return res.status(401).json({ message: "Authentication required" });
        }
        try {
            const userPayload = validateUserToken(userTokenCookieValue)
            if (!userPayload || userPayload.role !== "user") {
                return res.status(403).json({ message: "Access denied. Authors only." });
            }
            req.user = userPayload  
            next();
        } catch (error) {
            return res.json({message: "authentication failure"});
        }
    }
}


//Middleware for both author and user
export function checkForAnyAuthentication(authorCookie, userCookie) {
    return (req, res, next) => {
        if (isPublicRoute(req.originalUrl)) {
            return next();
        }

        const authorToken = req.cookies[authorCookie];
        const userToken = req.cookies[userCookie];

        if (!authorToken && !userToken) {
            return res.status(401).json({ message: "Authentication required" });
        }

        try {
            if (authorToken) {
                const authorPayload = validateToken(authorToken);
                if (authorPayload && authorPayload.role === "author") {
                    req.author = authorPayload;
                    return next();
                }
            }

            if (userToken) {
                const userPayload = validateUserToken(userToken);
                if (userPayload && userPayload.role === "user") {
                    req.user = userPayload;
                    return next();
                }
            }
            return res.status(403).json({ message: "Access denied." });
        } catch (error) {
            return res.status(401).json({ message: "Authentication failure" });
        }
    };
}

