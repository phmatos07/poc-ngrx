import { Injectable } from '@angular/core';
import { ProfilesState } from './../models/profiles.model';
import { User } from './../models/user.model';

@Injectable()
export class CrudHelpers {

  static addValue(state: ProfilesState, user: User): ProfilesState {
    if (Array.isArray(state.users) && state.users.length >= 1) {
      const users = Object.assign([], state.users);
      users.push({ ...user, dateStamp: CrudHelpers.currentDate() });
      return { ...state, users };
    }
    return { ...state, users: [{ ...user, dateStamp: CrudHelpers.currentDate() }] };
  }

  private static currentDate(): string {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
}