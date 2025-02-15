import mongoose from "mongoose";

export async function dbConnect(url){
    return mongoose.connect(url)
}