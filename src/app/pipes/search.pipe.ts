import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[] | null, phrase: string | number | boolean): any[] | null {
    if (!Array.isArray(value) || !phrase) {

      return value;
    }

    phrase = typeof phrase !== 'number' ? ('' + phrase).toLowerCase() : phrase;

    return value.filter( item => {
      //console.log((Object.values(item)).toString());
      return ((Object.values(item)).toString().toLowerCase().includes(''+phrase))
    });
  }
}
