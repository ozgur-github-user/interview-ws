export interface Unit {
    id: number,
    name: string,
    description: string,
    expansion: string,
    age: string,
    cost: {
        Gold?: number | null,
        Wood?: number | null,
        Food?: number | null
    },
    build_time: number,
    reload_time: number,
    attack_delay: number,
    movement_rate: number,
    line_of_sight: number,
    hit_points: number,
    range: number,
    armor: string,
    completed?: boolean,
    accuracy: string,
    attack: number,

}


export interface Units {
    units: Unit[]
}


export interface UnitAppState {
    units: Unit[]
}