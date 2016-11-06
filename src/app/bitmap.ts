export class Bitmap {
  public image;

  constructor(public src:string, public width:number, public height:number, public loadcallback = undefined){
    this.image = new Image();
    if (loadcallback)
      this.image.onload = loadcallback.bind(null, this, this.image);
    this.image.src = src;
  }
}
