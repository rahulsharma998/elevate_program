import userModels from "../models/userModels";
import { newUser } from "../controllers/userController";
import express from "express"

const router=express.Router();

newUser.post("/register")