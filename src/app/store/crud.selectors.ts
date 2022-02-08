import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KEY_CRUD } from './../models/key-crud.const';
import { ProfilesState } from './../models/profiles-state.interface';
import { adapter } from './crud.reducer';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const profilesState = createFeatureSelector<ProfilesState>(KEY_CRUD);
export const fullState = createSelector(profilesState, (state: ProfilesState) => state);
export const userIds = createSelector(profilesState, selectIds);
export const userEntities = createSelector(profilesState, selectEntities);
export const allUsers = createSelector(profilesState, selectAll);
export const userTotal = createSelector(profilesState, selectTotal);
