import express,{ Request,Response } from "express";
import { mhsController } from "../../controllers";

export const router = express.Router({
    strict:true
})

router.get('/',(req:Request,res:Response)=>{
    mhsController.read(req,res)
})

router.post('/',(req:Request,res:Response)=>{
    mhsController.create(req,res)
})

router.patch('/',(req:Request,res:Response)=>{
    mhsController.update(req,res)
})

router.delete('/',(req:Request,res:Response)=>{
    mhsController.delete(req,res)
})