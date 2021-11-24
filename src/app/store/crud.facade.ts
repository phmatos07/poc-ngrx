import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as CrudActions from './crud.actions';
import * as CrudSelectors from './crud.selectors';

@Injectable()
export class CrudFacade {

  users$ = this.store.pipe(select(CrudSelectors.users));

  constructor(
    private readonly store: Store
  ) { }

  create(user: User): void {
    this.store.dispatch(CrudActions.CREATE(user));
  }
}
