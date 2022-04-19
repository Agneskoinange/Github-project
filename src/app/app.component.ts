
import { Component, OnInit } from '@angular/core';
import { APIService } from './services/api.service';
import { GithubFormComponent } from './github-form/github-form.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[APIService]
  })
  
export class AppComponent implements OnInit {
title = 'Github-project';

  user: any= [];
  repos: any= [];
  username!: string;
  constructor(private apiservice: APIService) {
    this.apiservice. getUser().subscribe((user: any) => {
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