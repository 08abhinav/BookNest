export const handleHomeView = async (req, res)=>{
    return res.render('home', {author: req.author})
}   

export const handleGetStarted = (req, res)=>{
    return res.render('getStartedView')
}

export const handleAuthorView = (req, res)=>{
    return res.render('authorCreateView', {author: req.author})
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

export const handleUserHome = (req, res)=>{
    return res.render('userHome', {user: req.user})
}



//Book's
import { Books } from "../models/books.js"

export const handleCreateBook = (req, res)=>{
    return res.render('createBook', {author: req.author})
}

export const handleViewBook = async (req, res)=>{
    try {
        const books = await Books.find().populate({ 
            path: "authors",
            select: "authorName",
            model: "Author"});
        console.log(books)
        return res.render('bookView', {user: req.user, books})
    } catch (error) {
        return res.status(504).json({message: "Something went wrong while fetching the book", err: error.message})
    }
}