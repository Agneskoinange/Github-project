
import { Component, OnInit } from '@angular/core';
import { APIService } from './services/api.service';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  
export class AppComponent implements OnInit {
title = 'Github-project';

  user: any= [];
  repos: any= [];
  username: string | undefined;
  constructor(private apiservice: APIService) {
    this.apiservice.getUser().subscribe((user: any) => {
      console.log(user);
      this.user = user;
    });
    this.apiservice.getRepos().subscribe((repos: any) => {
     
      this.repos = repos;
    });
  }
  ngOnInit() {
  }
   searchUser() {
     this.apiservice.updateUser(this.username);
     this.apiservice.getUser().subscribe((user: any) => {
       this.user = user;
     });
     this.apiservice.getRepos().subscribe((repos: any) => {
      
       this.repos = repos;
     });

   }
}