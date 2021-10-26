import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as crudActions from './crud.actions';

export const KEY_CRUD = 'CRUD';
export const user = new User;

const _crud = createReducer(
  user,
  on(crudActions.CREATE, (state, data) => (
    { ...data })
  ));

export function reducer(state: User, action: Action) {
  return _crud(state, action);
}
