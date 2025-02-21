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
            authors: [req.author._id]
        })
        return res.redirect('/authorHome');
    } catch (error) {
        return res.status(404).json({message:"Something went wrong", error: error.message})
    }
}


export const handleBookUpdation = async (req, res) => {
    try {
        const { title, genre } = req.body;
        
        const book = await Books.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        book.title = title;
        book.genre = genre;

        if (req.file) {
            book.link = "/uploads/" + req.file.filename; 
        }
        await book.save();

        return res.redirect('/postedBooks');
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while updating", error: error.message });
    }
};