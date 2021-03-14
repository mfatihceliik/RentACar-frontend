import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44326/api/users/getall";
  constructor(private httpClient:HttpClient) { }

  GetUsers() : Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl + "users/getall";
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
}
