import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Github-project';
  mySubscription!:Subscription

  constructor(private apiService:APIService){
  }
ngOnDestroy(): void {
  this.mySubscription.unsubscribe();
}
  ngOnInit(){
    this.mySubscription.add (
    this.apiService.getRepo("").subscribe((repos)=>
    console.log(repos)
    )
  }
}

