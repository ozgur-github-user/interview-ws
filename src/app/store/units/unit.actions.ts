import { createAction, props } from "@ngrx/store";
import { Unit } from "app/model/unit.interface";

export const loadUnits = createAction('[Unit] Load', props<{ units: Unit[] }>());