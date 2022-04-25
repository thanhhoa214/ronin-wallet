import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roninAddressTruncate' })
export class RoninAddressTruncatePipe implements PipeTransform {
  transform(value: string): string {
    return (
      value.toString().substring(0, 4) +
      '...' +
      value.toString().substring(value.toString().length - 4)
    );
  }
}
