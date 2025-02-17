export const handleHomeView = async (req, res)=>{
    return res.render('home', {author: req.author})
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
    return res.render('authorHome', {author: req.author})
}


//User's
export const handleUserSignup = (req, res)=>{
    return res.render('userSignup')
}

export const handleUserLogin = (req, res)=>{
    return res.render('userLogin')
}