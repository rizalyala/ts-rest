import { Request,Response } from "express";
import { CrudController } from "../CrudController";
import dataMhsJson from '../../resources/dataMhs.json';

export class MhsController extends CrudController{
    public read(req:Request<import("express-serve-static-core").ParamsDictionary>,res:Response):void{
        res.json(dataMhsJson)
    }
}