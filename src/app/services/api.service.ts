import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class APIService {
  [x: string]: any;
  getRepos: any;
  getRepo() {
    throw new Error('Method not implemented.');
  }
  username: string;

  constructor(private http: HttpClient) {
    console.log('Github Service Ready...');
    this.username = 'agneskoinange';

  }
  get User() {
    return this.http.get('https://api.github.com/users/' + this.username)
    .pipe(map((result: any) => result));

  }

  get Repo() {
    return this.http.get(' https://api.github.com/users/' + this.username + '/repos')
    .pipe(map((result: any) => result));
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