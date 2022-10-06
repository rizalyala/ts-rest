import { Request,Response } from "express";
import { CrudController } from "../CrudController";
import dataMhsJson from '../../resources/dataMhs.json';

export class MhsController extends CrudController{
    public read(req:Request<import("express-serve-static-core").ParamsDictionary>,res:Response):void{
        res.json(dataMhsJson)
    }

    public create(req:Request<import("express-serve-static-core").ParamsDictionary>,res:Response):void{
        throw new Error("Belum Diimplementasikan");
    }

    public update(req:Request<import("express-serve-static-core").ParamsDictionary>,res:Response):void{
        throw new Error("Belum Diimplementasikan");
    }

    public delete(req:Request<import("express-serve-static-core").ParamsDictionary>,res:Response):void{
        throw new Error("Belum Diimplementasikan");
    }
}