import { UserModel } from "../models/user.js";

export const handleUserSignUp = async (req, res)=>{
    try {
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password) return res.json({message: "All user fields are necessary"});

        await UserModel.create({fullName, email, password})
        res.redirect('')
    } catch (error) {
        return res.json({message: "Something went wrong while user sign up", error:error.message})
    }
}

export const handleUserSignin = async (req, res)=>{
    try {
        const{email, password} = req.body;
        if(!email || !password) return res.send({message: "All fields are required"});

        const user = await UserModel.matchUserPasswordAndGenerateUserToken(email, password)
        return  res.cookie("user", user).redirect('')
    } catch (error) {
        return res.json({message: "Something went wrong while user sign in", err: error.message})
    }
}

export const handleUserSignOut = (req, res)=>{
    return res.clearCookie("user").redirect("/")
}
