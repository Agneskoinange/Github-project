import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  @Output () emitSearch = new EventEmitter<any>()

  searchRepo:string | undefined;
    constructor() { }
    
search(){
  this.emitSearch.emit(this.searchRepo)
  // console.log(this.searchTerm)
}

  ngOnInit(): void {
  }

}
