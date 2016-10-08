import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-museum-slide',
  templateUrl: './museum-slide.component.html',
  styleUrls: ['./museum-slide.component.css']
})
export class MuseumSlideComponent implements OnInit {
  PersonDirectory: [Object];

  constructor() {
    this.PersonDirectory = [
      {vorname: "Alan", nachname: "Turing",
      portrait: {
        url : "url(http://placehold.it/600x600)",
        width: "600px", height: "600px"
      },
      slides: [
          {type: "DataTile", payload: "Born on the moon"},
          {type: "ImageTile", caption: "Bomba", src: "http://placehold.it/300x300"}
      ]},
      {vorname: "Ada", nachname: "Lovelace"},
      {vorname: "Gabe", nachname: "Newell"},
    ];
  }

  ngOnInit() {
  }

}
