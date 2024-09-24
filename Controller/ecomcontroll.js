import ecom from "../Models/Schema.js"


// Post

export const create=async(req,res)=>{
    try {

        const create=new ecom(req.body)
        const data=await create.save()
        res.status(200).json({data})

    } catch (error) {
        console.log(error);
        res.status(500).send("error occured while creating")
        
    }
}

// Get

export const fetch=async(req,res)=>{
    try {

        const getting=await ecom.find()
        res.status(200).json({getting})
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send("error occured while getting data")
        
        
    }
}

// GET BY ID 

export const getbyid=async(req,res)=>{
    try {
        const id=req.params.id
        
        const byid=await ecom.findOne({_id:id})

        res.status(200).json({byid})
        
    } catch (error) {
        console.log(error);
        res.status(500).send("error occured while geting by id")
        
    }
}

//  GET BY NAME

export const getbyname=async(req,res)=>{
    try {
        const {name}=req.params

        const byname=await ecom.findOne({productname:name})

        res.status(200).json({byname})
        
    } catch (error) {
        console.log(error);
        res.status(500).send("error occured while geting by name")
        
    }
}

// PUT

export const update=async(req,res)=>{
    try {
        const id=req.params.id;
        
        const {productname,producttype,description,price,quantity}=req.body

        const update=await ecom.findOneAndUpdate({_id:id},{productname,producttype,description,price,quantity})

        res.status(200).json({update})
        

    } catch (error) {
        console.log(error);
        res.status(500).send("error occured while updating")
        
    }
}

// Delete 

export const remove=async(req,res)=>{
    try {
        const id=req.params.id;

        const removed=await ecom.findOneAndDelete({_id:id})

        res.status(200).json({removed})
        

    } catch (error) {
        console.log(error);
        res.status(500).send("error occured while updating")
        
    }
}