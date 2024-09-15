import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectUnitState = (state: AppState) => state.units;

export const getUnits = createSelector(
  selectUnitState,
  (state) => state.units
)

export const getUnitById = (id:number) => createSelector(
  selectUnitState,
  (state) => (state.units.find(unit => (unit.id === id)))
)