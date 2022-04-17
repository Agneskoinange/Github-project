import { Component } from '@angular/core';
import { APIService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Github-project';
  constructor(private apiService:APIService){
  }

  ngOnInit(){
    const repos = this.apiService.getRepo().subscribe((repos)=>);
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

