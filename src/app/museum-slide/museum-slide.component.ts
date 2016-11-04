import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../backend.service';

@Component({
  selector: 'app-museum-slide',
  templateUrl: './museum-slide.component.html',
  styleUrls: ['./museum-slide.component.css']
})
export class MuseumSlideComponent implements OnInit {
  @Input() PersonDirectory: [Person];

  constructor() {
  }

  ngOnInit() {
  }

}
