import bcrypt, { genSalt } from "bcrypt";
import jwt from "jsonwebtoken"
import express, { json } from "express";
import User from "../models/userModels";

export const newUser= async(req,res)=>{
    try {
        if(!email){
            const hashPassword=password.bcrypt(genSalt,10)
            newUser=User({name:"",email:"",password:hashPassword})
            res.status(200).json({message:"user created"})
        }
        res.status(401).json({message:"User Already Exist"})
    } catch (error) {
        res.status(401).json({message:"Error in creating user"})
    }
}
export const LogIn=async(req,res){
    try{
        if(!email && !password) res.status(404).json({message:"User not found"});
        const user=User.password.bcrypt.compare(password,hashPassword);
        res.status(201).json("User found")
    }
}