import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable()
export class CrudHelpers {

  static selectUserId(a: User): string {
    return a.id;
  }

  static sortByName(a: User, b: User): number {
    return a.name.localeCompare(b.name);
  }
}
