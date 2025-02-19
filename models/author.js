import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
    authorName:{
        type: String,
        required: true
    },

    bio:{
        type: String,
        required: true,
        default: "Not bio added yet"
    },

    nationality:{
        type: String,
        required: true,
    },
    
    socialLinks:{
        twitter: {
            type: String, 
            default: "https://twitter.com/" 
        },
        instagram: {
            type: String, 
            default: "https://instagram.com/" 
            },
        linkedin: { 
            type: String, 
            default: "https://linkedin.com/in/" 
            }
    }

}, {timestamps:true})

export const Author = mongoose.model("Author", authorSchema)
