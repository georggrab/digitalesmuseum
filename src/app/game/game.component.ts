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

  onKey(val, e){
    let state = GameComponent.codes[e.keyCode];
    if (typeof state === 'undefined') return;
    GameComponent.states[state] = val;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
  }

  ngAfterViewInit() {
      this.canvas = document.getElementById('display');
      this.player = new Player(15.3, -1.2, Math.PI * 0.3);
      this.camera = new Camera(this.canvas, GameComponent.MOBILE? 160:320, 0.8);
      this.map = new Map(32);
      this.map.createRoom();
      this.gameloop = new GameLoop();

      document.addEventListener('keydown', this.onKey.bind(this,true), false);
      document.addEventListener('keyup', this.onKey.bind(this,false), false);
      /*document.addEventListener('touchstart', this.onKey.bind(this,true), false);
      document.addEventListener('touchmove', this.onKey.bind(this,true), false);
      document.addEventListener('touchEnd', this.onKey.bind(this,true), false);*/

      this.gameloop.start((seconds:number) => {
        this.map.update(seconds);
        this.player.update(GameComponent.states, this.map, seconds);
        this.camera.render(this.player, this.map);
      })
  }

  ngOnInit() {
  }

}
