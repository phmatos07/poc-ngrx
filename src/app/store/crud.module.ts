import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CrudEffects } from './crud.effects';
import { CrudFacade } from './crud.facade';
import * as CrudReducer from './crud.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature(
      CrudReducer.KEY_CRUD,
      CrudReducer.reducer
    ),
    EffectsModule.forRoot([CrudEffects])
  ],
  providers: [CrudFacade]
})
export class CrudModule { }
