import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { UserClass } from '../user-class';
import { RepositoryClass } from '../repository-class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class APIService {

  constructor(private http: HttpClient) {
    console.log('Github Service Ready...');
    this.username =  'agneskoinange';

  }
  getUserClass() {
    return this.http.get('https://api.github.com/users/' + this.username)
    .map(result => result);

  }
  get RepositoryClass() {
    return this.http.get(' https://api.github.com/users/' + this.username + '/repos')
    .map(result => result);
  }

  updateRepo(username: string) {
    this.username = username;
  }

}

//   constructor(private http:HttpClient) { }
   
//   // getUsername(username:string){
//   //   return username
//   // }
//   getRepo(username:string){
//     return this.http.get(`https:github.com/users/agneskoinange/repos`);
//   }