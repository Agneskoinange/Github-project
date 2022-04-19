
import { Component, } from '@angular/core';
import { APIService } from './services/api.service';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[APIService]
  })
  
export class AppComponent {
title = 'Github-project';
  
}