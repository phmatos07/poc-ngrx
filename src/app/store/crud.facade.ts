import { Injectable } from '@angular/core';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.interface';
import * as CrudActions from './crud.actions';
import * as CrudSelectors from './crud.selectors';

@Injectable()
export class CrudFacade {

  fullState$ = this.store.pipe(select(CrudSelectors.fullState));
  allUsers$ = this.store.pipe(select(CrudSelectors.allUsers));

  constructor(
    private readonly store: Store
  ) { }

  create(user: User): void {
    this.store.dispatch(CrudActions.CREATE(user));
  }

  update(user: Update<User>): void {
    this.store.dispatch(CrudActions.UPDATE(user));
  }

  delete(id: string): void {
    this.store.dispatch(CrudActions.DELETE({ id }));
  }
}
