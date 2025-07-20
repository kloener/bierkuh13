import { Pipe, PipeTransform } from '@angular/core';

export const fullAssignee: (short?: string[]) => string = (short) => {
  if (!short) {
    return '';
  }
  return short
    .map((val) => {
      switch (val.toUpperCase()) {
        case 'H':
          return 'Heini';
        case 'K':
          return 'Keks';
      }
      return val;
    })
    .join(', ');
};

@Pipe({
  name: 'assignee',
  standalone: true
})
export class AssigneePipe implements PipeTransform {
  transform(value?: string[]): string {
    return fullAssignee(value);
  }
}
