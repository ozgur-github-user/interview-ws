import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitDetailTableComponent } from './unit-detail-table.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { getUnitById } from 'app/store/units/unit.selector';
import { Unit } from 'app/model/unit.interface';

describe('UnitDetailTableComponent', () => {
  let component: UnitDetailTableComponent;
  let fixture: ComponentFixture<UnitDetailTableComponent>;
  let mockUnit: Unit;
  let initialState;

  beforeEach(async () => {

    initialState = {
      units: [
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
        }
      ]
    };

    mockUnit = {
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
    };

    await TestBed.configureTestingModule({
      declarations: [UnitDetailTableComponent],
      providers: [
        provideMockStore({
          initialState:{ units: initialState },
          selectors: [
            {
              selector: getUnitById(1),
              value: mockUnit
            }
          ]
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: {
                get: (id: string) => '1' // eslint-disable-line
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have unitId equal to 1 reading by query params',() => {
    expect(component.unitId).toBe('1'); 
  })

  it('should have selectedUnit object equals to expected mock unit', () => {
    spyOn(component, 'getUnitByStore').and.callThrough();
    component.getUnitByStore();
    
    expect(component.getUnitByStore).toHaveBeenCalled();
    expect(component.selectedUnit).toEqual(mockUnit);
  });

});
