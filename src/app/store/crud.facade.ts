import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import * as CrudActions from './crud.actions';
import * as CrudSelectors from './crud.selectors';

@Injectable()
export class CrudFacade {

  users$ = this.store.pipe(
    select(CrudSelectors.users),
    map(users => users.users)
  );

  constructor(
    private readonly store: Store
  ) { }

  create(user: User): void {
    this.store.dispatch(CrudActions.CREATE(user));
  }

  update(idUser: number, user: User): void {
    this.store.dispatch(CrudActions.UPDATE({ idUser, user }));
  }

  delete(idUser: number): void {
    this.store.dispatch(CrudActions.DELETE({ idUser }));
  }
}
