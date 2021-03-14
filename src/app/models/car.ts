import { ResponseModel } from "./ResponseModel";

export interface Car extends ResponseModel{
    carId:number,
    brandId:number,
    colorId:number,
    modelYear:string,
    dailyPrice:number,
    carDescription:string,
}