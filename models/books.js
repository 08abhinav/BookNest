import mongoose, { Schema } from "mongoose";
import { Author } from "./author.js";

const bookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },

    authors:[{
        type: mongoose.Types.ObjectId,
        ref: "Author",
        required: true
    }]
}, {timestamps: true})

export const Books = mongoose.model("Books", bookSchema)
