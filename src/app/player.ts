import { Bitmap } from './bitmap';
import { Map } from './map';
import { GameLoop } from './game-loop';

export class Player {
  public weapon: Bitmap;
  public paces: number = 0;
  constructor(public x: number, public y: number, public direction: number){
    this.weapon = new Bitmap('assets/knife_hand2.png', 600, 723);
  }

  rotate(angle : number){
    this.direction = (this.direction + angle + Math.PI*2) % (Math.PI*2);
  }

  walk(distance: number, map: Map){
    let dx = Math.cos(this.direction) * distance;
    let dy = Math.sin(this.direction) * distance;
    if (map.get(this.x + dx, this.y).h <= 0) this.x += dx;
    if (map.get(this.x, this.y + dy).h <= 0) this.y += dy;
    this.paces += distance;
  }

  update(controls, map, seconds){
    if (controls.left) this.rotate(-Math.PI * seconds);
    if (controls.right) this.rotate(Math.PI * seconds);
    if (controls.forward) this.walk(3* seconds, map);
    if (controls.backward) this.walk(-3*seconds, map);
  }
}
