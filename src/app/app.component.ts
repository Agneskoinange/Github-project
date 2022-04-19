
import { Component, OnInit } from '@angular/core';
import { APIService } from './services/api.service';
// import { GithubFormComponent } from './github-form/github-form.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[APIService]
  })
  
export class AppComponent {
title = 'Github-project';

  

  
}