import mongoose from "mongoose";

const ecommod=mongoose.Schema({
    productname:String,
    producttype:String,
    description:String,
    price:String,
    quantity:String
})

const ecom=mongoose.model("ecom",ecommod);

export default ecom;