    // "test": "echo \"Error: no test specified\" && exit 1"

//  const express = require('express')
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

import Product from './models/Product.model.js'
import mongoose from 'mongoose';
import productRoutes from  "./routes/product.route.js";
dotenv.config();
const app=express();

const PORT = process.env.PORT
app.use(express.json());    //allows us to accept JSON data in the req. body(middleware)


app.use("/api/products", productRoutes);









// app.get("/api/products", async (req,res)=>{
//    try{
//     const products = await Product.find({});
//     res.status(200).json({success: true,data: products});
//    } catch(error){
//     console.log("error in fetching products:",error.message);
//     res.status(500).json({success:false, message:"server Error"});
//    }
// })

// app.post("/api/products",async (req,res)=>
// {
//     // res.send("Server is ready");
//      const product = req.body;  // user will send this data

//      if(!product.name || !product.price || !product.image)
//      {
//         return res.status(400).json({success:false, message:"Please provide all fields."}); 
//      }

//      const newProduct = new Product(product)
//      try{
//         await newProduct.save();
//         res.status(201).json({success : true, data: newProduct});
//      }catch(error)
//      {
//         console.error("Error in Create product:",error.message);
//         res.status(500).json({success:false,message:"Server Error"});
//      }

// });

// app.put("/api/products/:id", async(req,res)=>
// {
//     const {id}= req.params;
//     const product = req.body;
//     if(!mongoose.Types.ObjectId.isValid(id))
//     {
//         return res.status(404).json({success:false, message: "Invalid Product Id"});
//     }
//     try{
//         const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
//         res.status(200).json({success: true, data:updatedProduct});
//         // await Product.findByIdAndUpdate(id,product,{new:true});
//     }catch(error)
//     {
//         res.status(500).json({success: false, message: "Server Error"});
//     }
// })

// app.delete("/api/products/:id",async (req,res)=>
// {
//     const {id}=req.params;
//     // console.log("id : ",id);

//     try{
//         await Product.findByIdAndDelete(id);
//         res.status(200).json({success:true, message: "Product deleted"});
//     }catch(error){
//         console.log("Error in Deleteing the product",error.message);
//         res.status(404).json({success: false, message: "Product not found."});
//     }
// });


console.log(process.env.MONGO_URI)
app.listen(PORT, ()=>
{
    connectDB();
    console.log("Server started at http://localhost:5000 hello how you" +PORT ) ;
});


// console.log(process.e
// console.log("TEST_VAR:", process.env.TEST_VAR); // Should log: "hello-world"

