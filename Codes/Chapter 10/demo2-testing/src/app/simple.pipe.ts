import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simple'
})
export class SimplePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
