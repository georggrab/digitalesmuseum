import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Person } from '../backend.service';

@Component({
  selector: 'app-museum-slide',
  templateUrl: './museum-slide.component.html',
  styleUrls: ['./museum-slide.component.css']
})
export class MuseumSlideComponent implements OnInit, OnChanges {
  @Input() PersonDirectory: [Person];
  @Input() Filters;

  hasFilteredChip(person) {
    for (let pchip of person.chips) {
      for (let fchip of this.Filters) {
        if (fchip.text === pchip.text && fchip.letter === pchip.letter) {
          return true;
        }
      }
    }
    return false;
  }

  constructor() {
  }

  ngAfterViewChecked(){
  }

  ngOnChanges(changes) {

  }

  ngOnInit() {
  }

}
