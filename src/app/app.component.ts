import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BackendService, Person } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public menuClicked : boolean = false;
  public person: Array<Person> = [];
  public filters = [];

  constructor(private backendService: BackendService){
    backendService.getPersons().subscribe((data) => {
      this.person = data;
    }, (err)=>{},()=>{});
  }

  filterChanged(ev){
    this.filters = ev;
};
}
