import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitsComponent } from './units.component';
import { Unit } from 'app/model/unit.interface';
import { FilterParams } from 'app/model/unit.filter.params';
import { getUnits } from 'app/store/units/unit.selector';
import { StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';

describe('UnitsComponent', () => {
  let component: UnitsComponent;
  let fixture: ComponentFixture<UnitsComponent>;
  let initialState: Unit[];
  let mockUnits: Unit[];

  beforeEach(async () => {

    mockUnits = [
      {
        id: 1,
        age: 'feudal',
        name: 'Archer',
        description: 'Ranged unit',
        expansion: 'Age of Kings',
        cost: { Wood: 100, Food: 50},
        build_time: 35,
        reload_time: 2,
        attack_delay: 0.35,
        movement_rate: 0.96,
        line_of_sight: 5,
        hit_points: 30,
        range: 4,
        armor: '0/0',
        completed: true,
        accuracy: '80%',
        attack: 4
      },
      {
        id: 2,
        age: 'castle',
        name: 'Archer',
        description: 'Ranged unit',
        expansion: 'Age of Kings',
        cost: { Wood: 200, Gold: 100 },
        build_time: 35,
        reload_time: 2,
        attack_delay: 0.35,
        movement_rate: 0.96,
        line_of_sight: 5,
        hit_points: 30,
        range: 4,
        armor: '0/0',
        completed: true,
        accuracy: '80%',
        attack: 4
      },
      {
        id: 3,
        age: 'imperial',
        name: 'Archer',
        description: 'Ranged unit',
        expansion: 'Age of Kings',
        cost: { Wood: 50, Food: 200, Gold: 150 }, 
        build_time: 35,
        reload_time: 2,
        attack_delay: 0.35,
        movement_rate: 0.96,
        line_of_sight: 5,
        hit_points: 30,
        range: 4,
        armor: '0/0',
        completed: true,
        accuracy: '80%',
        attack: 4
      }
    ];

    initialState = [
        {
        id: 1,
        name: 'Archer',
        description: 'Ranged unit',
        expansion: 'Age of Kings',
        age: 'Feudal',
        cost: { Wood: 50, Food: 30 },
        build_time: 35,
        reload_time: 2,
        attack_delay: 0.35,
        movement_rate: 0.96,
        line_of_sight: 5,
        hit_points: 30,
        range: 4,
        armor: '0/0',
        completed: true,
        accuracy: '80%',
        attack: 4
        },
        {
          id: 2,
          name: 'War Elephant',
          description: 'Ranged unit',
          expansion: 'Age of Kings',
          age: 'Dark',
          cost: { Wood: 80, Food: 100 },
          build_time: 35,
          reload_time: 2,
          attack_delay: 0.35,
          movement_rate: 0.96,
          line_of_sight: 5,
          hit_points: 30,
          range: 4,
          armor: '0/0',
          completed: true,
          accuracy: '80%',
          attack: 4
        }
      ];

  
    await TestBed.configureTestingModule({
      declarations: [UnitsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [StoreModule.forRoot({})],
      providers: [
        provideMockStore({
          initialState:{ units: initialState },
          selectors: [
            { selector: getUnits, value: initialState }
          ]
      })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should fetch units by store', ()=> {
    spyOn(component, 'getUnitsByStore').and.callThrough();

    component.getUnitsByStore();

    expect(component.getUnitsByStore).toHaveBeenCalled();
    expect(component.units).toEqual(initialState);
    expect(component.filteredUnits).toEqual(initialState);
  })

  it('should filter units according to given age paramater',()=>{
    spyOn(component, 'filterUnitByAge').and.callThrough();

    component.filterUnitByAge('Feudal');

    expect(component.filterUnitByAge).toHaveBeenCalled();
    expect(component.filteredUnits).toEqual( [initialState[0] ])
  })

  it('should filter units by given cost parameters', ()=> {
    spyOn(component, 'filterUnitByCost').and.callThrough();

    const filterParams: FilterParams = {
      age: 'dark',
      filterRanges: 
      {
        wood: {min: 20, max: 150 },
        gold: { min: 20, max: 200 },
        food: { min: 0, max: 150 },
      },
      filterState : {
        wood: true,
        food: true,
        gold: true
      }
    };

    component.filterUnitByCost(filterParams);
    expect(component.filterUnitByCost).toHaveBeenCalled();
    expect(component.filteredUnits).toEqual([])
  })

  it('should filter units by  given costs ', () => {
    component.units = mockUnits;
    component.filteredUnits = mockUnits;

    const filterParams: FilterParams = {
      age: 'dark',
      filterRanges: 
      {
        wood: {min: 40, max: 150 },
        gold: { min: 10, max: 200 },
        food: { min: 0, max: 150 },
      },
      filterState : {
        wood: true,
        food: true,
        gold: false
      }
    };

    component.filterUnitByCost(filterParams);
    expect(component.filteredUnits.length).toBe(1);
  });

  it('should filter units by  given costs ', () => {
    component.units = mockUnits;
    component.filteredUnits = mockUnits;

    const filterParams: FilterParams = {
      age: 'dark',
      filterRanges: 
      {
        wood: {min: 50, max: 150 },
        gold: { min: 50, max: 200 },
        food: { min: 0, max: 150 },
      },
      filterState : {
        wood: false,
        food: false,
        gold: false
      }
    };


    component.filterUnitByCost(filterParams);

    expect(component.filteredUnits.length).toBe(3);
    expect(component.filteredUnits).toEqual(mockUnits);
  });

  it('should filter units by  given costs ', () => {
    component.units = mockUnits;
    component.filteredUnits = mockUnits;

    const filterParams: FilterParams = {
      age: 'dark',
      filterRanges: 
      {
        wood: {min: 50, max: 150 },
        gold: { min: 50, max: 200 },
        food: { min: 0, max: 150 },
      },
      filterState : {
        wood: false,
        food: false,
        gold: false
      }
    };

    component.filterUnitByCost(filterParams);

    expect(component.filteredUnits.length).toBe(3);
    expect(component.filteredUnits).toEqual(mockUnits);
  });

  it('should filter units by  given costs v2', () => {
    component.units = mockUnits;
    component.filteredUnits = mockUnits;

    const filterParams: FilterParams = {
    age: 'all',
    filterRanges: 
    {
      wood: {min: 50, max: 150 },
      gold: { min: 50, max: 200 },
      food: { min: 0, max: 150 },
    },
    filterState : {
      wood: false,
      food: false,
      gold: false
    }
    };

    component.filterUnitByCost(filterParams);
    expect(component.filteredUnits.length).toBe(3);
    expect(component.filteredUnits).toEqual(mockUnits);
  });
});
