import mongoose, { model, Schema } from "mongoose";
import { createToken } from "../services/authorization.js";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String, 
        required: true
    }
},{timeseries:true})

userSchema.pre("save", async function(next){
    const user = this;
    if(!user.isModified('password')) return next();

    const salt = 10;
    const hashedPassword = await bcrypt.hash(user.password, salt);

    user.password = hashedPassword
    next()
})


userSchema.static("matchUserPasswordAndGenerateUserToken", async function(email, password){
    const user = await this.findOne({email})

    if(!user) throw new Error("Email not found");

    const isMatch = bcrypt.compare(password, author.password)
    if(!isMatch) throw new Error("Incorrect password");

    const token = createToken(author)
    return token
})

export const UserModel = new model("UserModel", userSchema)