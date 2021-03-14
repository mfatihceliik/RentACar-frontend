import { ResponseModel } from "./ResponseModel";

export interface User extends ResponseModel{
    id:number,
    firstName:string,
    lastName:string,
    email:string,
}