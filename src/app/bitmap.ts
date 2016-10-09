export class Bitmap {
  public image;
  constructor(public src:string, public width:number, public height:number){
    this.image = new Image();
    this.image.src = src;
  }
}
