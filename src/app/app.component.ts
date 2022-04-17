import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
// import { Subscription } from 'rxjs';
import { APIService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Github-project';


  repos:repo;

    constructor(public apiservice: APIService) {
     }


    ngOnInit() {
      this.username("agneskoinange");
    }

    searchRepos(username: any){
      this.apiservice.searchRepo(this.searchRepos).then(()=>{
        this.repos=this.apiservice.repos;
  

        },
      
        (error: any)=>{
          console.log(error)
        }
      )
      
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
