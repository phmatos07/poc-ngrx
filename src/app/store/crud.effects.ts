import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as CrudActions from './crud.actions';

@Injectable()
export class CrudEffects {

  effect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CrudActions.CREATE),
      switchMap((_action) => {
        console.log('Effect', _action);
        return of(_action);
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions
  ) { }
}
