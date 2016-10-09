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
      {vorname: "Alan", nachname: "Turing", caption: "First human on the moon",
      portrait: {
        url : "url(http://placehold.it/600x600)",
        width: "600px", height: "600px"
      },
      chips: [
        {letter: "A", text: "Awesome Guy"},
        {letter: "C", text: "Computer Scientist"}
      ],
      slides: [
          {type: "DataTile", payload: "Born on the moon"},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x400)", height: "400px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
      ]},
      {vorname: "Lord", nachname: "Gaben", caption: "First human on the moon",
      portrait: {
        url : "url(http://placehold.it/600x600)",
        width: "600px", height: "600px"
      },
      chips: [
        {letter: "A", text: "Awesome Guy"},
        {letter: "C", text: "Computer Scientist"}
      ],
      slides: [
          {type: "DataTile", payload: "Born on the moon"},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x400)", height: "400px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
      ]},
      {vorname: "Ada", nachname: "Lovelace", caption: "First human on the moon",
      portrait: {
        url : "url(http://placehold.it/600x600)",
        width: "600px", height: "600px"
      },
      chips: [
        {letter: "A", text: "Awesome Guy"},
        {letter: "C", text: "Computer Scientist"}
      ],
      slides: [
          {type: "DataTile", payload: "Born on the moon"},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x400)", height: "400px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
      ]},
    ];
  }

  ngOnInit() {
  }

}
