import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class APIService {
  
  username: string;
  // Repos: any;
  // searchUser: any;

  constructor(private http: HttpClient) {
    
    this.username = 'AgnesKoinange';

  }
  getUser() {
    return this.http.get('https://api.github.com/users/' + this.username)
    .pipe(map((result: any) => result));

  }

 getUsername(username:string){
   return username
}
  getRepos() {
    return this.http.get(' https://api.github.com/users/' + this.username + '/repos')
    .pipe(map((result: any) => result));
  }

  updateUser(username: string) {
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