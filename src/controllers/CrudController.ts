import { Request, Response } from "express";
export abstract class CrudController {
    public abstract read(req:Request,res:Response):void 
        
    }
