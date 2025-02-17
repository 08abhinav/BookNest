export const handleHomeView = async (req, res)=>{
    return res.render('home', {author: req.user})
}   

export const handleGetStarted = (req, res)=>{
    return res.render('getStartedView')
}

export const handleAuthorView = (req, res)=>{
    return res.render('authorCreateView')
}

export const handleAuthorSigninView = (req, res)=>{
    return res.render('authorSignupView')
}

export const handleAuthorLoginView = (req, res)=>{
    return res.render('authorLoginView')
}

export const handleAuthorHome = (req, res)=>{
    return res.render('authorHome', {author: req.user})
}