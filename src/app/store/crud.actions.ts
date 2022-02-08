import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { User } from '../shared/models/user.interface';
import { CrudActionEnum } from './../shared/models/crud-action.enum';

export const INIT = createAction(CrudActionEnum.INIT);
export const CREATE = createAction(CrudActionEnum.CREATE, props<User>());
export const UPDATE = createAction(CrudActionEnum.UPDATE, props<Update<User>>());
export const DELETE = createAction(CrudActionEnum.DELETE, props<{ id: string }>());
