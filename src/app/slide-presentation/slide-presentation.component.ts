import { Component, OnInit, Input } from '@angular/core';
import { TrustPipe } from '../trust.pipe';

@Component({
  selector: 'app-slide-presentation',
  templateUrl: './slide-presentation.component.html',
  styleUrls: ['./slide-presentation.component.css'],
})
export class SlidePresentationComponent implements OnInit {
  @Input() PersonInputStream: any;

  constructor() {
  }

  ngAfterViewInit(){
  }

  ngOnInit() {
  }

}
