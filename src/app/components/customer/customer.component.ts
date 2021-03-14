import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/cutomer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[] = [];
  dataLoaded:boolean = false;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.GetCustomers();
  }

  GetCustomers(){
    this.customerService.GetCustomers().subscribe((response) => {
      this.customers = response.data;
      this.dataLoaded = true;
    });
  }

}
