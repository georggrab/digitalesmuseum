import { Bitmap } from './bitmap';

export class Map {
  public wallGrid;
  public skybox: Bitmap;
  public wallTexture: Bitmap;
  public frameTexture: Bitmap;
  public light: number = 0;


  // debug var!
  public ray: any;

  constructor(private size: number){
    this.wallGrid = new Array(this.size * this.size);
    for (let i = 0; i < this.size * this.size; i++){
      this.wallGrid[i] = {h: 0, idx: -1};
    }

    this.skybox = new Bitmap('assets/deathvalley_panorama.jpg', 2000, 750);
    this.wallTexture = new Bitmap('assets/wall_texture2.jpg', 900, 900);
    this.frameTexture = new Bitmap('assets/frame.png', 450, 450);
  }

  get(x:number, y:number){
    x = Math.floor(x);
    y = Math.floor(y);
    if (x < 0 || x > this.size - 1 || y < 0 || y > this.size -1) return -1;
    return this.wallGrid[y * this.size + x];
  }

  randomize(){
    for (let i = 0; i < this.size * this.size; i++){
      this.wallGrid[i] = Math.random() < 0.3? 1:0;
    }
  }
  createRoom(){
    for (let i = 0; i < this.size * this.size; i++){
      if (i % this.size == i) this.wallGrid[i] = {h : 1, idx : 1};
      if (i % this.size === 0) this.wallGrid[i] ={h : 1, idx : 1};
      if (i % this.size === 0 && i - 1 !== -1) this.wallGrid[i - 1] = {h : 1, idx : 1};
    }
    for (let i = (this.size * this.size) - this.size; i < this.size * this.size; i++){
      this.wallGrid[i] = {h : 1, idx : 1};
    }
    this.wallGrid[3] = {h:2,idx:1};
  }

  cast(point, angle, range){
    let self = this;
    let sin = Math.sin(angle);
    let cos = Math.cos(angle);
    let noWall = {length2: Infinity };

    let step = function(rise, run, x, y, inverted):any {
      if (run === 0) return noWall;
      let dx = run > 0 ? Math.floor(x + 1) - x: Math.ceil(x - 1) - x;
      let dy = dx * (rise / run);
      return {
        x: inverted? y + dy : x + dx,
        y: inverted? x + dx : y + dy,
        length2: dx * dx + dy * dy
      };
    }

    let inspect = function(step, shiftX, shiftY, distance, offset):any {
        var dx = cos < 0 ? shiftX : 0;
        var dy = sin < 0 ? shiftY : 0;
        step.height = self.get(step.x - dx, step.y - dy).h;
        step.distance = distance + Math.sqrt(step.length2);
        if (shiftX) step.shading = cos < 0 ? 2 : 0;
        else step.shading = sin < 0 ? 2 : 1;
        step.offset = offset - Math.floor(offset);
        return step;
    }

    let ray = function(origin):any {
      let stepX = step(sin, cos, origin.x, origin.y, undefined);
      let stepY = step(cos, sin, origin.y, origin.x, true);
      let nextStep = stepX.length2 < stepY.length2
        ? inspect(stepX, 1, 0, origin.distance, stepX.y)
        : inspect(stepY, 0, 1, origin.distance, stepY.x);
      if (nextStep.distance > range) return [origin];
      return [origin].concat(ray(nextStep));
    }
    this.ray = ray({x: point.x, y: point.y, height: 0, distance: 0});
    return ray({x: point.x, y: point.y, height: 0, distance: 0});


  }

  update(seconds: number){
    //if (this.light > 0) this.light = Math.max(this.light - 10 * seconds, 0);
    //else if (Math.random() * 5 < seconds) this.light = 2;
  }
}
