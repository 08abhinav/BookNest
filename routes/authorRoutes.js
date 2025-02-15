import express from "express"
import { handleAuthorCreation } from "../controllers/authorControls.js";
const authorRoute = express.Router()

authorRoute.post("/addAuthor", handleAuthorCreation)


export default authorRoute;
