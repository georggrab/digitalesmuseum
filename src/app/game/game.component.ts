import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Player } from '../player';
import { Map } from '../map';
import { Camera } from '../camera';
import { Bitmap } from '../bitmap';
import { GameLoop } from '../game-loop';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private canvas: Element;
  private player: Player;
  private camera: Camera;
  private gameloop: GameLoop;
  private map: Map;

  // begin stub input will replace with component input
  private rawGameDisplayData = {vorname: "Alan", nachname: "Turing", caption: "First human on the moon",
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
          {type: "ImageTile", caption: "Bomba", src: {url: "http://a2.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NDg0MDU1MTUzMTE2Njg3.jpg", height: "300px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "http://placehold.it/300x200", height: "200px", width: "300px"}},/*
          {type: "ImageTile", caption: "Bomba", src: {url: "http://placehold.it/300x200", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "http://placehold.it/300x200", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "http://placehold.it/300x200", height: "200px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "http://placehold.it/300x400", height: "400px", width: "300px"}},
          {type: "ImageTile", caption: "Bomba", src: {url: "http://placehold.it/300x200", height: "200px", width: "300px"}},*/
      ]};
  private gameData = [];
  // end stub

  static codes: Object = {
    37: 'left', 39: 'right', 38: 'forward', 40: 'backward'
  }

  static states: Object = {
    'left' : false,
    'right': false,
    'forward' : false,
    'backward': false
  }

  static MOBILE: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

  public loadedImages = 0;
  prepareInputs(inputData){
      for (let i of inputData.slides){
        if (i.type === "ImageTile" && i.src){
          let bmp = new Bitmap(i.src.url, i.src.width, i.src.height, () => {
            this.loadedImages++;
          });
          this.gameData.push({
            bitmap  : bmp
            , caption : {
              title : "Bletchley Park"
            , text  : "Yo Mother is in here"
          }
          });
        }
      }
  }

  onKey(val, e){
    let state = GameComponent.codes[e.keyCode];
    if (typeof state === 'undefined') return;
    GameComponent.states[state] = val;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
  }

  ngAfterViewInit() {
      this.canvas = document.getElementById('display');
      this.player = new Player(3, 3, Math.PI * 0.3);
      this.camera = new Camera(this.canvas, 320, 0.8);
      //this.camera = new Camera(this.canvas, GameComponent.MOBILE? 160:320, 0.8);
      this.map = new Map(8);
      this.map.createRoom();
      this.gameloop = new GameLoop();

      this.prepareInputs(this.rawGameDisplayData);

      document.addEventListener('keydown', this.onKey.bind(this,true), false);
      document.addEventListener('keyup', this.onKey.bind(this,false), false);
      /*document.addEventListener('touchstart', this.onKey.bind(this,true), false);
      document.addEventListener('touchmove', this.onKey.bind(this,true), false);
      document.addEventListener('touchEnd', this.onKey.bind(this,true), false);*/
      this.gameloop.start((seconds:number) => {
        this.map.update(seconds);
        this.player.update(GameComponent.states, this.map, seconds);
        this.camera.render(this.player, this.map, this.gameData);
      })
  }

  ngOnInit() {
  }

}
