import {Author} from "../models/author.js"

export const handleAuthorCreation = async (req, res)=>{
    try {
        const {authorName, bio, nationality, socialLinks} = req.body;
        if(!authorName || !nationality) return res.json({message: "authorname and nationality is reqyuired"});

        await Author.create({
            authorName,
            bio,
            nationality,  
            socialLinks
        })
        return res.redirect("/authorHome")
    } catch (error) {
        return res.json({message: "handleAuthorCreation catch method", err:error.message})
    }
}
