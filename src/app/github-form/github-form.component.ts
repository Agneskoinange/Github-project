import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { APIService } from '../services/api.service';


@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})

export class GithubFormComponent implements OnInit {

  // username!: string;
 
  ngOnInit(): void {
  }
  
  @Output () emitSearchUser = new EventEmitter<any>()

  
    
  // searchUser(){
  //   this.emitSearchUser.emit(this.username)
  // }

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
