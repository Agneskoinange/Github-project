import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }
   
  getUsername(username:string){
    return username
  }
  getRepo(){
    return this.http.get()
  }
}
