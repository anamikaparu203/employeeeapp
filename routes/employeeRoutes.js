const express=require('express');
const router=express.Router();
const employeeModel=require('../model/employeeData');
router.use(express.json());
router.use(express.urlencoded({extended:true}));
//GET OPERATIONS
router.get('/',async (req,res)=>{
    try {
        const data=await employeeModel.find();
        res.status(200).send(data);
    }  catch (error) {
       res.status(404).send('Data not found');
    }
    
})
//post operation
router.post('/addemployee',async(req,res)=>{
    try {
        var item=req.body;
        const data1=new employeeModel(item);
        const saveddata=await data1.save();
        res.status(200).send('Post sucessful');
    } catch (error) {
res.status(404).send('Post unsucessful');
        
    }
})
//Update Operation
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await carModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('Update Successful')
    } catch (error) {
        res.status(404).send('Update Unsuccessful')
    }
})
//Delete Operation
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await carModel.findByIdAndDelete(id)
        res.status(200).send('Delete Successfully')
    } catch (error) {
        res.status(404).send('Delete Unsucessfully')
    }
})


module.exports=router;