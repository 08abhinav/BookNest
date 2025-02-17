export const handleHomeView = (req, res)=>{
    return res.render('home')
}   

export const handleGetStarted = (req, res)=>{
    return res.render('getStartedView')
}

export const handleAuthorView = (req, res)=>{
    return res.render('authorView')
}

export const handleAuthorSigninView = (req, res)=>{
    return res.render('authorSignupView')
}

export const handleAuthorLoginView = (req, res)=>{
    return res.render('authorLoginView')
}