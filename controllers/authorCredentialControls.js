import {AuthorModel} from "../models/authorCredentials.js"

export const handleAuthorCreation = async (req, res)=>{
    try {
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password) return res.json({message: "All fields are required"});

        await AuthorModel.create({fullName, email, password})

        res.redirect("/authorLogin")
    } catch (error) {
        return res.json({message: "Something went wrong while sign up", error:error.message})
    }
}

export const handleAuthorSignin = async(req, res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password) return res.send({message: "All fields are required"});

        const author = await AuthorModel.matchPasswordAndGenerateToken(email, password)
        return res.cookie("token", author).redirect("/")
    } catch (error) {
        return res.json({message: "Something went wrong while sign in", err: error.message})
    }
}