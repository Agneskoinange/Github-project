import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  username!: string;
  
  
  @Output () emitSearch = new EventEmitter<any>()
  form: any;

    constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    
searchRepo(){
  this.emitSearch.emit(this.searchRepo)
  
//   if(this.form.valid){
//     console.log("Invalid")
//     return false
//   }
// }

  this.ngOnInit(); void {
  }

  
  
}
