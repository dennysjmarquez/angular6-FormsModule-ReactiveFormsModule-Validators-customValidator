import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonFull'
})
export class JsonFullPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    console.log(value);

    return '';
  }

}
