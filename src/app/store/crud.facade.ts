import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.interface';
import * as CrudActions from './crud.actions';

@Injectable()
export class CrudFacade {

  /* users$ = this.store.pipe(
    select(CrudSelectors.users),
    map(users => users)
  ); */

  constructor(
    private readonly store: Store
  ) { }

  create(user: User): void {
    this.store.dispatch(CrudActions.CREATE({user}));
  }

  update(idUser: number, user: User): void {
    this.store.dispatch(CrudActions.UPDATE({ idUser, user }));
  }

  delete(idUser: number): void {
    this.store.dispatch(CrudActions.DELETE({ idUser }));
  }
}
