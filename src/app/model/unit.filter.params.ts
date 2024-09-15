export interface FilterParams {
    age: string,
    filterState: FilterState,
    filterRanges: FilterRanges
}

export interface FilterState {
    wood: boolean,
    food: boolean,
    gold: boolean
}

export interface FilterRanges {
  wood: { min: number, max: number },
  food: { min: number, max: number },
  gold: { min: number, max: number }
}