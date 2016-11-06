import { Component, OnInit, Input } from '@angular/core';
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

  private animationRequestID;

  @Input() RawGameDisplayData;

  private gameData = [];
  // end stub

  static codes: Object = {
    37: 'left', 39: 'right', 38: 'forward', 40: 'backward'
  }

  static states: Object = {
    'left': false,
    'right': false,
    'forward': false,
    'backward': false
  }

  ngOnDestroy(){
    cancelAnimationFrame(this.animationRequestID);
    this.RawGameDisplayData = null;
    this.gameData = null;
    this.canvas = null;
    this.player = null;
    this.gameloop = null;
    this.map = null;
  }

  static MOBILE: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

  public loadedImages = 0;
  prepareInputs(inputData) {
    for (let i of inputData.imageTiles) {
      let bmp = new Bitmap(i.url, i.width, i.height, (futureBitmap, image) => {
        if (futureBitmap.width === 0) futureBitmap.width = futureBitmap.image.naturalWidth;
        if (futureBitmap.height === 0) futureBitmap.height = futureBitmap.image.naturalHeight;
        this.loadedImages++;
      });
      this.gameData.push({
        bitmap: bmp
        , caption: i.caption
      });
    }

  }

  onKey(val, e) {
    let state = GameComponent.codes[e.keyCode];
    if (typeof state === 'undefined') return;
    GameComponent.states[state] = val;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('display');
    this.player = new Player(3, 3, Math.PI * 0.3);
    this.camera = new Camera(this.canvas, GameComponent.MOBILE? 160:320, 0.8);
    this.map = new Map(8);
    this.gameloop = new GameLoop();

    this.gameData.push({bitmap : this.map.wallTexture});

    this.prepareInputs(this.RawGameDisplayData);
    this.map.createRoom(this.gameData.length);

    document.addEventListener('keydown', this.onKey.bind(this, true), false);
    document.addEventListener('keyup', this.onKey.bind(this, false), false);
    document.addEventListener('touchstart', this.onKey.bind(this, true), false);
    document.addEventListener('touchmove', this.onKey.bind(this, true), false);
    document.addEventListener('touchEnd', this.onKey.bind(this, true), false);

    this.animationRequestID = this.gameloop.start((seconds: number) => {
      this.map.update(seconds);
      this.player.update(GameComponent.states, this.map, seconds);
      this.camera.render(this.player, this.map, this.gameData);
    })
  }

  ngOnInit() {
  }

}
