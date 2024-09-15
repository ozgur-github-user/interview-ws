import { createReducer, on } from "@ngrx/store";
import { UnitAppState } from "app/model/unit.interface";
import * as UnitActions from './unit.actions';
export const appFeatureKey = 'units';

export const initialState: UnitAppState = {
    units: []
}

export const unitReducers = createReducer(
  initialState,
  on(
    UnitActions.loadUnits,
    (state, { units }) => ({ ...state, units})
  )
);