
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { APIService } from './services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[APIService]
})
export class AppComponent {
  title = 'Github-project';

  repo: any= [];
  repos: any= [];
  username!: string;
  name: any;
  
  constructor(private apiservice: APIService) {
    this.apiservice.getRepo().subscribe((repo: any) => {
      console.log(repo);
      this.repo = repo;
    });
    this.apiservice.getRepos().subscribe((repos: any) => {
      this.repos = repos;
    });
  }

    // ngOnInit() {
    // }
    
   searchRepo() {
     this.apiservice.updateRepo(this.username);
     this.apiservice.getRepo().subscribe((repo: any) => {
       this.repo = repo;
     });
     
     this.apiservice.getRepos().subscribe((repos: any) => { 
       this.repos = repos;
     });
    }

    mySubscription!:Subscription

  // constructor(private apiService:APIService){
  // }
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }

  ngOnInit(){
    this.mySubscription.add (
    this.apiservice.getRepo().subscribe((repos: any)=>
    console.log(repos))
    )
  }

  asyc: any getPuplicReposWithPromise (username:string){
  cosnt this.repos =this.apiservice.getRepo(username)
  this.repos=this.repos

  }


  searchRepos(){
    let username =this.name.value;
    this.getPuplicReposWithPromise(username)
    return false;
  }
}



// mySubscription!:Subscription

  // constructor(private apiService:APIService){
  // }
  // ngOnDestroy(): void {
  //   this.mySubscription.unsubscribe();
  // }

  // ngOnInit(){
  //   this.mySubscription.add (
  //   this.apiService.getRepo("").subscribe((repos)=>
  //   console.log(repos))
  //   )
  // }

  // // asyc getPuplicReposWithPromise (username:string){
  // // cosnt repos =await this.apiService.getRepo(username)
  // // this.repos=repos

  // // }


  // // searchRepos(){
  // //   let username =this.name.value;
  // //   this.getPuplicReposWithPromise(username)
  // //   return false;
  // // }
