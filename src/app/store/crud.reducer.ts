import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ProfilesState } from '../shared/models/profiles-state.interface';
import { User } from '../shared/models/user.interface';
import * as crudActions from './crud.actions';
import { CrudHelpers } from './crud.helpers';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: CrudHelpers.selectUserId,
  sortComparer: CrudHelpers.sortByName,
});

export const initialState: ProfilesState = adapter.getInitialState({});

const _crud = createReducer(
  initialState,
  on(crudActions.INIT, (state) => ({ ...state })),
  on(crudActions.CREATE, (state, user) => adapter.addOne(user, state)),
  on(crudActions.UPDATE, (state, user) => adapter.updateOne(user, state)),
  on(crudActions.DELETE, (state, { id }) => adapter.removeOne(id, state)),
);

export function reducer(state: ProfilesState | undefined, action: Action) {
  return _crud(state, action);
}
