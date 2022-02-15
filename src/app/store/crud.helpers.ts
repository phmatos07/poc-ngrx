import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.interface';

@Injectable()
export class CrudHelpers {

  static selectUserId(user: User): string {
    return user.id;
  }

  static sortByName(userA: User, userB: User): number {
    return userA.name.localeCompare(userB.name);
  }
}
