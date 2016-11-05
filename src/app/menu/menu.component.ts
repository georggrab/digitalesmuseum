import { Component, OnInit, Input, OnChanges, SimpleChange, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Person, Chip } from '../backend.service';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {
  @Input() PersonDirectory: [Person];
  @Output() filterChanged : EventEmitter<any> = new EventEmitter();

  public Chips = [];
  public FilteredChips = [];
  public visiblePersons = 0;
  constructor(private sharedService : SharedServiceService, private cdr: ChangeDetectorRef) {
    sharedService.subject.subscribe(value => {
      this.visiblePersons = value;
      cdr.detectChanges();
    });
  }

  ngOnInit() {
  }

  toggleFilter(chip){
    let i = this.FilteredChips.indexOf(chip);
    if (i > -1) {
      this.FilteredChips.splice(i, 1);
    } else {
      this.FilteredChips.push(chip);
    }
    this.filterChanged.emit(this.FilteredChips);
  }

  isFiltered(chip){
    return this.FilteredChips.indexOf(chip) !== -1;
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if (changes["PersonDirectory"]) {
      this.Chips = [];
      for (let person of this.PersonDirectory) {
        if (person.chips) {
          for (let pChip of person.chips) {
            if (this.Chips.length === 0){
              this.Chips.push(pChip);
            }
            let duplicate = false;
            for (let uChip of this.Chips) {
              if (uChip.letter === pChip.letter && uChip.text === pChip.text) {
                duplicate = true;
                break;
              }
            }
            if (!duplicate)
              this.Chips.push(pChip);
          }
        }
      }
    }
  }

  go(url) {
    window.open(url, '_blank')
  }

}
