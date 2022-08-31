import express,{ Request,Response } from "express";
import { mhsController } from "../../controllers";

export const router = express.Router({
    strict:true
})

router.get('/',(req:Request,res:Response)=>{
    mhsController.read(req,res)
})