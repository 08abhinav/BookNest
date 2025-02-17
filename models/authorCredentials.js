import mongoose, { Schema } from "mongoose";
import { createToken } from "../services/authorization.js";
import bcrypt from 'bcrypt'

const authorCredentials = new Schema({
    fullName:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    password:{
        type: String, 
        required: true
    },

}, {timestamps:true})


authorCredentials.pre("save", async function(next){
    const author = this;
    if(!author.isModified('password')) return;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(author.password, saltRounds)
    author.password = hashedPassword;
    next();
})


authorCredentials.static("matchPasswordAndGenerateToken", async function(email, password){
    const author = await this.findOne({email})
    if(!author) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, author.password)
    if(!isMatch) throw new Error("Incorrect password");

    const token = createToken(author)
    return token
})

export const AuthorModel = mongoose.model("AuthorModel", authorCredentials);
