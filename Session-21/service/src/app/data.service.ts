import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserClass } from './UserClass';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string="https://jsonplaceholder.typicode.com/users";

  //Dependency Injection
  constructor( private http:HttpClient) { }

  //get method
  getAllUsers():Observable<UserClass[]>{
    return this.http.get<UserClass[]>(this.url);
  }
}
