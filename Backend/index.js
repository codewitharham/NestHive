import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import { ConnectToDB } from "./src/dbConfig/dbConfig.js";
import { app } from "./src/app.js";


ConnectToDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`App running on port: ${process.env.HOST}${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Connection Error: " ,err)
})