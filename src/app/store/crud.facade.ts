import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import * as CrudActions from './crud.actions';

@Injectable()
export class CrudFacade {

  constructor(
    private readonly store: Store
  ) { }

  create(user: User): void {
    this.store.dispatch(CrudActions.CREATE(user));
  }
}
