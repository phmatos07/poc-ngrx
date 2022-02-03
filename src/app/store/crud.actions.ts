import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.interface';

export const INIT = createAction('[CRUD] Init');
export const CREATE = createAction('[CRUD] Create', props<{ user: User }>());
export const UPDATE = createAction('[CRUD] Update', props<{ idUser: number, user: User }>());
export const DELETE = createAction('[CRUD] Delete', props<{ idUser: number }>());
