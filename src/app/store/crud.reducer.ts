import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ProfilesState } from '../models/profiles-state.interface';
import { User } from '../models/user.interface';
import * as crudActions from './crud.actions';
import { CrudHelpers } from './crud.helpers';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: CrudHelpers.selectUserId,
  sortComparer: CrudHelpers.sortByName,
});

export const initialState: ProfilesState = adapter.getInitialState({ });

const _crud = createReducer(
  initialState,
  on(crudActions.INIT, (state) => ({ ...state })),
  on(crudActions.CREATE, (state, { user }) => {
    return adapter.addOne(user,  state)
  }),
  /*  on(crudActions.UPDATE, (state, { user }) => {
     return adapter.updateOne(user)
   }), */
  /* on(crudActions.CREATE, (state, userState) => (CrudHelpers.addValue(state, userState))),
  on(crudActions.UPDATE, (state, dataState: { idUser: number, user: User }) => (CrudHelpers.updateValue(state, dataState.idUser, dataState.user))),
  on(crudActions.DELETE, (state, { idUser }) => (CrudHelpers.deleteValue(state, idUser))), */
);

export function reducer(state: ProfilesState | undefined, action: Action) {
  return _crud(state, action);
}
