import { Bitmap } from './bitmap';

export class Map {
  public wallGrid;
  public skybox: Bitmap;
  public wallTexture: Bitmap;
  public frameTexture: Bitmap;
  public light: number = 0;


  // debug var!
  public ray: any;

  constructor(private size: number) {
    this.wallGrid = new Array(this.size * this.size);
    for (let i = 0; i < this.size * this.size; i++) {
      this.wallGrid[i] = { h: 0, idx: -1 };
    }

    this.skybox = new Bitmap('assets/deathvalley_panorama.jpg', 2000, 750);
    this.wallTexture = new Bitmap('assets/wall_texture2.jpg', 900, 900);
    this.frameTexture = new Bitmap('assets/frame.png', 450, 450);
  }

  get(x: number, y: number) {
    x = Math.floor(x);
    y = Math.floor(y);
    if (x < 0 || x > this.size - 1 || y < 0 || y > this.size - 1) return -1;
    return this.wallGrid[y * this.size + x];
  }

  randomize() {
    for (let i = 0; i < this.size * this.size; i++) {
      this.wallGrid[i] = Math.random() < 0.3 ? 1 : 0;
    }
  }
  randomSample(arr, size) {
    let shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }
  createRoom(dataLength) {
    // 1: Walls. 11+: Possible Image Positions.
    let roomStructure = [
      0, 1, 1, 1, 1, 1, 1, 0,
      1, 0, 0, 0, 0, 0, 0, 1,
      1, 0,11,12,13,14,15, 1,
      1, 0, 0, 0, 0, 0, 0, 1,
      1, 0,16,17,18,19,20, 1,
      1, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 1,
      0, 1, 1, 1, 1, 1, 1, 0,
    ];
    for (let i = 0; i < this.size * this.size; i++) {
      this.wallGrid[i] = { h: 0, idx: 0 };
    }

    let cnt = 0;
    let indexCandidates = [];
    for (let i in roomStructure) {
      if (roomStructure[i]==1) {
        this.wallGrid[i] = { h: 1, idx: 0 };
      } else if (roomStructure[i] > 10) {
        indexCandidates.push(i);
      }
    }
    console.log(indexCandidates);
    for (let i of indexCandidates){
      if (cnt < dataLength)
        { this.wallGrid[i] = { h: 1, idx: cnt++ }
        console.log("Placing " + cnt + " on " + i);
        } else {break}
    }

  }

  cast(point, angle, range) {
    let self = this;
    let sin = Math.sin(angle);
    let cos = Math.cos(angle);
    let noWall = { length2: Infinity };

    let step = function(rise, run, x, y, inverted): any {
      if (run === 0) return noWall;
      let dx = run > 0 ? Math.floor(x + 1) - x : Math.ceil(x - 1) - x;
      let dy = dx * (rise / run);
      return {
        x: inverted ? y + dy : x + dx,
        y: inverted ? x + dx : y + dy,
        length2: dx * dx + dy * dy
      };
    }

    let inspect = function(step, shiftX, shiftY, distance, offset): any {
      var dx = cos < 0 ? shiftX : 0;
      var dy = sin < 0 ? shiftY : 0;
      step.height = self.get(step.x - dx, step.y - dy).h;
      step.distance = distance + Math.sqrt(step.length2);
      if (shiftX) step.shading = cos < 0 ? 2 : 0;
      else step.shading = sin < 0 ? 2 : 1;
      step.offset = offset - Math.floor(offset);
      return step;
    }

    let ray = function(origin): any {
      let stepX = step(sin, cos, origin.x, origin.y, undefined);
      let stepY = step(cos, sin, origin.y, origin.x, true);
      let nextStep = stepX.length2 < stepY.length2
        ? inspect(stepX, 1, 0, origin.distance, stepX.y)
        : inspect(stepY, 0, 1, origin.distance, stepY.x);
      if (nextStep.distance > range) return [origin];
      return [origin].concat(ray(nextStep));
    }
    this.ray = ray({ x: point.x, y: point.y, height: 0, distance: 0 });
    return ray({ x: point.x, y: point.y, height: 0, distance: 0 });


  }

  update(seconds: number) {
    //if (this.light > 0) this.light = Math.max(this.light - 10 * seconds, 0);
    //else if (Math.random() * 5 < seconds) this.light = 2;
  }
}
