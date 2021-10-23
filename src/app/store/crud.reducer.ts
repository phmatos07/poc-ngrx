/* import { createReducer, on } from '@ngrx/store';
import { CREATE, decrement, reset } from './crud.actions';

export const initialState = 0;
const _counterReducer = createReducer(
  initialState,
  on(CREATE, (state) => state + 1),
  on(decrement, (state) => state - 1),

);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
} */