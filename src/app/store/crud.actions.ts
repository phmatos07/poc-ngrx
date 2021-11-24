import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const INIT = createAction('[CRUD] Init');
export const CREATE = createAction('[CRUD] Create', props<User>());
export const UPDATE = createAction('[CRUD] Update');
export const DELETE = createAction('[CRUD] Delete');
