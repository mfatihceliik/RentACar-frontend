import { DatePipe } from "@angular/common";
import { ResponseModel } from "./ResponseModel";

export interface Rental extends ResponseModel{
    rentalId:number,
    carId:number,
    customerId:number,
    rentDate:DatePipe,
    returnDate:DatePipe,
}