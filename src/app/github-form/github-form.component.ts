import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})

export class GithubFormComponent implements OnInit {

  username!: string;
 
  ngOnInit(): void {
  }
  
  @Output () emitSearchUser = new EventEmitter<any>()

  constructor() { }
    
  searchUser(){
    this.emitSearchUser.emit(this.username)
  }

}
