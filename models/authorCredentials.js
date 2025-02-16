import mongoose, { Schema } from "mongoose";
import { createToken } from "../services/authorization.js";

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
    const hashedPassword = bcrypt.hash(this.password, saltRounds)

    this.password = hashedPassword;
    next();
})


authorCredentials.static("matchPasswordAndGenerateToken", async function(email, password){
    const author = await this.find({email})
    if(!author) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, author.password)
    if(!isMatch) throw new Error("Incorrect password");

    const token = createToken(author)
    next()
})

const AuthorModel = mongoose.model("AuthorModel", authorCredentials);
