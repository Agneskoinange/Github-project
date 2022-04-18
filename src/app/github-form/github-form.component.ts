import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  username!: string;
  // searchRepo!: string;
  
  @Output () emitSearch = new EventEmitter<any>()

    constructor() { }
    
searchRepo(){
  this.emitSearch.emit(this.searchRepo)
  // console.log(this.searchTerm)
}

  ngOnInit(): void {
  }

}
