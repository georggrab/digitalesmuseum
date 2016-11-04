import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUrl'
})
export class ToUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "url(" + value + ")";
  }

}
