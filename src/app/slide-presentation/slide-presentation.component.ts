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
  Sources; DeathDay = "heute"; BirthDate = "";
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
      for (let obj of this.PersonInputStream.dataTiles){
      switch (obj.short_text){
        case "SOURCES" :
          try {
            this.Sources = JSON.parse(obj.long_text);
          } catch (err) {
            console.warn(err);
          }
        break;
        case "BIRTHDATE":
        case "BIRTHDAY":
          this.BirthDate = obj.long_text;
        break;
        case "DEATH-DAY":
          this.DeathDay = obj.long_text;
        break;
      }

      }
    }

  }

  ngAfterViewInit(){
  }

  ngOnInit() {
  }

}
