import { createAction, props } from '@ngrx/store';
import { User } from '../shared/models/user.interface';
import { CrudActionEnum } from './../shared/models/crud-action.enum';

export const INIT = createAction(CrudActionEnum.INIT);
export const CREATE = createAction(CrudActionEnum.CREATE, props<{ user: User }>());
export const UPDATE = createAction(CrudActionEnum.UPDATE, props<{ idUser: number, user: User }>());
export const DELETE = createAction(CrudActionEnum.DELETE, props<{ idUser: number }>());
