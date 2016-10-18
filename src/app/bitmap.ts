export class Bitmap {
  public image;

  constructor(public src:string, public width:number, public height:number, public loadcallback = undefined){
    this.image = new Image();
    this.image.onload = loadcallback;
    this.image.src = src;
  }
}
