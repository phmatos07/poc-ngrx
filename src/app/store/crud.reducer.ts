import { Action, createReducer, on } from '@ngrx/store';
import { ProfilesState } from '../models/profiles.model';
import { User } from './../models/user.model';
import * as crudActions from './crud.actions';
import { CrudHelpers } from './crud.helpers';


export const initialState = new ProfilesState();

const _crud = createReducer(
  initialState,
  on(crudActions.INIT, (state) => ({ ...state })),
  on(crudActions.CREATE, (state, userState) => (CrudHelpers.addValue(state, userState))),
  on(crudActions.UPDATE, (state, dataState: { idUser: number, user: User }) => (CrudHelpers.updateValue(state, dataState.idUser, dataState.user))),
  on(crudActions.DELETE, (state, { idUser }) => (CrudHelpers.deleteValue(state, idUser))),
);

export function reducer(state: ProfilesState | undefined, action: Action) {
  return _crud(state, action);
}
