import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minusConvertion'
})
export class MinusConvertionPipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase();
  }

}
