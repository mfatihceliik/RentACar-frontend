import { ResponseModel } from "./ResponseModel";

export interface Customer extends ResponseModel{
    customerId:number,
    userId:number,
    companyName:string,
}