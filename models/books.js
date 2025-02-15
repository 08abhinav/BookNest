import mongoose, { Schema } from "mongoose";
import { Author } from "./author.js";

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    link:{
        type: String,
        required: true
    },

    author:{
        type: Schema.Types.ObjectId,
        ref: "Author",
        required: true
    }
}, {timestamps: true})

export const Books = mongoose.model("Books", bookSchema)
