import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Person } from '../backend.service';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-museum-slide',
  templateUrl: './museum-slide.component.html',
  styleUrls: ['./museum-slide.component.css']
})
export class MuseumSlideComponent implements OnInit, OnChanges {
  @Input() PersonDirectory: [Person];
  @Input() Filters;

  hasFilteredChip(person) {
    let filteredPosessions = [];
    for (let pchip of person.chips) {
      for (let fchip of this.Filters) {
        if (fchip.text === pchip.text && fchip.letter === pchip.letter) {
          filteredPosessions.push(fchip);
        }
      }
    }
    return filteredPosessions.length === person.chips.length;
  }

  constructor(private sharedService: SharedServiceService) { }

  ngAfterViewChecked(){
    let visiblePersons = this.PersonDirectory.length;
    for (let person of this.PersonDirectory){
      if (this.hasFilteredChip(person)) visiblePersons--;
    }
    this.sharedService.subject.next(visiblePersons);
  }

  ngOnChanges(changes) {

  }

  ngOnInit() {
  }

}
