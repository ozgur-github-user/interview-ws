import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UnitService } from './services/unit-data.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { loadUnits } from './store/units/unit.actions';
import { Units } from './model/unit.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let unitService: jasmine.SpyObj<UnitService>;
  let store: MockStore;

  const mockUnits: Units =  {
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
    ]
  };


  beforeEach(async () => {
    const unitServiceMock = jasmine.createSpyObj('UnitService', ['loadUnitData']);
    const storeMock = jasmine.createSpyObj('Store', ['dispatch']);

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: UnitService, useValue: unitServiceMock },
        { provide: Store, useValue: storeMock },
        provideMockStore()
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    unitService = TestBed.inject(UnitService) as jasmine.SpyObj<UnitService>;
    store = TestBed.inject(MockStore);

    unitService.loadUnitData.and.returnValue(of(mockUnits));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadUnits on initialization', () => {
    spyOn(component, 'loadUnits').and.callThrough();
    component.ngOnInit();
    expect(component.loadUnits).toHaveBeenCalled();
  });

  it('should load units from UnitService and dispatch loadUnits action', () => {
    spyOn(store, 'dispatch').and.callThrough();

    component.loadUnits();

    expect(unitService.loadUnitData).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(loadUnits({ units: mockUnits.units }));
  });
});
