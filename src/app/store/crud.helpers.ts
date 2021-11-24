import { Injectable } from '@angular/core';
import { ProfilesState } from './../models/profiles.model';
import { User } from './../models/user.model';

@Injectable()
export class CrudHelpers {

  static addValue(state: ProfilesState, user: User): ProfilesState {
    if (Array.isArray(state.users) && state.users.length >= 1) {
      const users = Object.assign([], state.users);
      users.push({ ...user, dateStamp: new Date().getDate() });
      return { ...state, users };
    }
    return { ...state, users: [{ ...user, dateStamp: new Date().getDate() }] };
  }
}
