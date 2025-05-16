import { Pipe, PipeTransform } from '@angular/core';
import {DateTime} from 'luxon';

@Pipe({
  name: 'dateFromUTC',
  standalone: true
})
export class DateFromUTCPipe implements PipeTransform {
  
  transform(value: string, ...args: unknown[]): unknown {
    return  DateTime.fromFormat(value,"dd-MM-yyyy");
  }

}
