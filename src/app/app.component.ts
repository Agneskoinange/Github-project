
import { Component, OnInit } from '@angular/core';

import { APIService } from './services/api.service';

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
  constructor(private apiservice: APIService) {
    this.apiservice.getRepo().subscribe((repo: any) => {
      console.log(repo);
      this.repo = repo;
    });
    this.apiservice.getRepos().subscribe((repos: any) => {
      // console.log(user);
      this.repos = repos;
    });
    }

    ngOnInit() {
    }
    
   searchRepo() {
     this.apiservice.updateRepo(this.username);
     this.apiservice.getRepo().subscribe((repo: any) => {
       this.repo = repo;
     });
     
     // Console.log('It works');
     this.apiservice.getRepos().subscribe((repos: any) => {
       // Console.log(user);
       this.repos = repos;
     });

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
