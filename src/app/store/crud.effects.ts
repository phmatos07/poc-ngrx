import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { map } from 'rxjs/operators';
import { Helpers } from './../shared/helpers/helpers';
import { User } from './../shared/models/user.interface';
import * as CrudActions from './crud.actions';

@Injectable()
export class CrudEffects {

  updateDate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CrudActions.CREATE, CrudActions.UPDATE),
      map((_action) => CrudActions.UPDATE_DATE(this.transformUserObject(_action)))
    ), { dispatch: true }
  );

  constructor(
    private actions$: Actions
  ) { }

  private transformUserObject(user: any): Update<User> {
    return {
      id: user.id.toString(),
      changes: { dateStamp: Helpers.currentDate() }
    };
  }
}
