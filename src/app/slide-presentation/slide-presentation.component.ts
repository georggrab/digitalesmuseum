import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TrustPipe } from '../trust.pipe';
import { ToUrlPipe } from '../to-url.pipe';

@Component({
  selector: 'app-slide-presentation',
  templateUrl: './slide-presentation.component.html',
  styleUrls: ['./slide-presentation.component.css'],
})
export class SlidePresentationComponent implements OnInit, OnChanges {
  @Input() PersonInputStream: any;
  Sources;
  GameStarted : boolean = false;

  toggleGameStart() {
    this.GameStarted = !this.GameStarted;
  }

  constructor() {
  }

  keys() : Array<string> {
    return Object.keys(this.Sources);
  }

  ngOnChanges(change){
    if (this.PersonInputStream.dataTiles && this.PersonInputStream.dataTiles.length > 1){
      console.log(this.PersonInputStream.dataTiles[1].long_text);
      this.Sources = JSON.parse(this.PersonInputStream.dataTiles[1].long_text);
    }

  }

  ngAfterViewInit(){
  }

  ngOnInit() {
  }

}
