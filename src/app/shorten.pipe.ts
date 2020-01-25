import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    let actualLimit:number = limit?limit:50;
    return value.substr(0,actualLimit) + ' ...';
  }

}
