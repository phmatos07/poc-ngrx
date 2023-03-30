import { ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from './../../../environments/environment';


/**
 * @description Registro detalhado de tudo o que acontece na Store.
 */
export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: any, action: any): any => {

    const isError = action.type.search(/fail|error/gi) !== -1;

    console.groupCollapsed(
      `%c[ACTION] ${isError ? 'X' : '-'} ${action.type}`,
      isError ? 'color: #F33738' : 'color: #00838F;'
    );
    console.log('%cAction', 'font-weight: 700;', action);
    console.log('%cState', 'font-weight: 700;', state);
    console.groupEnd();

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [logger] : [];
