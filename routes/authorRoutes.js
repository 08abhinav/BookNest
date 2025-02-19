import express from "express"
import { handleAuthorCreation } from "../controllers/authorControls.js";
const authorRoute = express.Router()

authorRoute.post("/authorProfile", handleAuthorCreation)


export default authorRoute;
