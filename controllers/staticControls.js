import { Books} from "../models/books.js"

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

export const handlePostedBooks = async(req, res)=>{
    try {
        const books = await Books.find({})
        return res.render('authorDashBoard', {books, author: req.author})
    } catch (error) {
        return res.status(504).json({message: "Something went wrong while fetching the book", err: error.message})
    }
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
import path from "path"

export const handleCreateBook = (req, res)=>{
    return res.render('createBook', {author: req.author})
}

export const handleViewBook = async (req, res)=>{
    try {
        const books = await Books.find().populate({ 
            path: "authors",
            select: "authorName",
            model: "Author"});
        return res.render('bookView', {user: req.user, books})
    } catch (error) {
        return res.status(504).json({message: "Something went wrong while fetching the book", err: error.message})
    }
}

export const handleSingleViewBook = async (req, res) => {
    try {
        const filename = decodeURIComponent(req.params.filename);
        const filePath = path.resolve("public", filename);
        res.setHeader("Content-Type", "application/pdf");
        res.sendFile(filePath, (err) => {
            if (err) {
                // console.error("Error sending file:", err);
                res.status(404).send("Book not found");
            }
        });
    } catch (error) {
        // console.error("Error:", error.message);
        return res.json({ message: "Book not found", error: error.message });
    }
};


export const handleSingleBook = async(req, res)=>{
    try {
        const book = await Books.findById(req.params.id)
        if(!book) return res.json({message: "Book not found"});

        return res.render('bookUpdate', {book: [book]})
    } catch (error) {
        return res.json({message:"Something went wrong", error:error.message})
    }
}