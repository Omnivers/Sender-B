// Import
const express = require('express');
const app=express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require('dotenv');
const port=3000;

// Config
dotenv.config();
app.use(cors('*'));
app.use(express.json());

// Launch
app.get('/',(req,res)=>{
    res.json("Hello World")
})
app.listen(process.env.PORT || port,()=>{
    console.log("Hello Server")
})
