import {Books} from "../models/books.js"

export const handleBookCreation = async(req, res)=>{
    try {
        const {title, genre, authors} = req.body;

        if(!title || !genre || !authors){
            return res.status(504).json({message:"All Fields are required"})
        }
        await Books.create({
            title,
            link: `uploads/${req.file.filename}`,
            genre,
            authors: req.author._id
        })
        return res.redirect('/authorHome');
    } catch (error) {
        return res.status(404).json({message:"Something went wrong", error: error.message})

    }
}
