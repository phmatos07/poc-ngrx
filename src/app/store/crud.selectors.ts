import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KEY_CRUD } from './../models/key-crud.const';
import { ProfilesState } from './../models/profiles.model';

export const profilesState = createFeatureSelector<ProfilesState>(KEY_CRUD);
export const users = createSelector(profilesState, (state: ProfilesState) => state);
