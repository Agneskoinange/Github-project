import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { map } from 'rxjs';
import 'rxjs/Rx';
import { UserClass } from '../user-class';
import { RepositoryClass } from '../repository-class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class APIService {
  getRepos: any;
  getRepo() {
    throw new Error('Method not implemented.');
  }
  username: string;

  constructor(private http: HttpClient) {
    console.log('Github Service Ready...');
    this.username = 'agneskoinange';

  }
  getUserClass() {
    return this.http.get('https://api.github.com/users/' + this.username)
    .map((result: any) => result);

  }
  get RepositoryClass() {
    return this.http.get(' https://api.github.com/users/' + this.username + '/repos')
    .map((result: any) => result);
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