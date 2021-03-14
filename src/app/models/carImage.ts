import { DatePipe } from "@angular/common";
import { ResponseModel } from "./ResponseModel";

export interface CarImage extends ResponseModel{
    carImageId:number,
    carId:number,
    imagePath:string,
    date:DatePipe,
}