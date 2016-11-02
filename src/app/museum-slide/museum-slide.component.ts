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
        url : "url(http://a2.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NDg0MDU1MTUzMTE2Njg3.jpg)",
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
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x400)", height: "400px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
      ]},
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
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x400)", height: "400px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
      ]},
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
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x400)", height: "400px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "url(http://placehold.it/300x200)", height: "200px", width: "300px"}},
      ]},
    ];
  }

  ngOnInit() {
  }

}
