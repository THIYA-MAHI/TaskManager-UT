import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: User[], ...args: string[]): User[] {
    let searchText = args[0];

    return value.filter(a => a.name.toLowerCase().includes(searchText.toLowerCase())
    || a.email.toLowerCase().includes(searchText.toLowerCase()))

  }

}
