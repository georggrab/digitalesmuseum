import { Component, OnInit, Input } from '@angular/core';
import { Person, Chip } from '../backend.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() PersonDirectory: [Person];
  public Chips: [Chip];
  constructor() { }

  ngOnInit() {
  }

}
