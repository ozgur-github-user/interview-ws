import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitTableComponent } from './unit-table.component';
import { Unit } from 'app/model/unit.interface';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';


describe('UnitTableComponent', () => {
  let component: UnitTableComponent;
  let fixture: ComponentFixture<UnitTableComponent>;
  let mockUnit: Unit;
  let mockUnitNull: Unit;
  let router: Router;

  beforeEach(async () => {
    mockUnit =
      {
        id: 1,
        name: 'Archer',
        description: 'Ranged unit',
        expansion: 'Age of Kings',
        age: 'Feudal',
        cost: { Wood: 50, Food: 30, Gold:120 },
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

      mockUnitNull = {
        id: 1,
        name: 'Archer',
        description: 'Ranged unit',
        expansion: 'Age of Kings',
        age: 'Feudal',
        cost: {},
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
      declarations: [UnitTableComponent],
      providers: [
        {
          provide: Router, 
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitTableComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return proper cost info string',()=> {
    spyOn(component, 'generateCostInfo').and.callThrough();

    const generatedCosInfo = component.generateCostInfo(mockUnit);

    expect(component.generateCostInfo).toHaveBeenCalled();
    expect(generatedCosInfo).toEqual('Wood:50, Food:30, Gold:120');
  })

  it('should return proper cost info string by null properties',()=> {
    spyOn(component, 'generateCostInfo').and.callThrough();
    delete mockUnit.cost.Food;
    const generatedCosInfo = component.generateCostInfo(mockUnit);

    expect(component.generateCostInfo).toHaveBeenCalled();
    expect(generatedCosInfo).toEqual('Wood:50, Gold:120');
  })

  it('should return proper cost info string by null properties',()=> {
    spyOn(component, 'generateCostInfo').and.callThrough();
    delete mockUnit.cost.Food;
    const generatedCosInfo = component.generateCostInfo(mockUnit);

    expect(component.generateCostInfo).toHaveBeenCalled();
    expect(generatedCosInfo).toEqual('Wood:50, Gold:120');
  })

  it('should return proper cost info string by null properties',()=> {
    spyOn(component, 'generateCostInfo').and.callThrough();
    delete mockUnit.cost.Gold;
    const generatedCosInfo = component.generateCostInfo(mockUnit);

    expect(component.generateCostInfo).toHaveBeenCalled();
    expect(generatedCosInfo).toEqual('Wood:50, Food:30');
  })

  it('should return proper cost info string by null properties',()=> {
    spyOn(component, 'generateCostInfo').and.callThrough();
    delete mockUnit.cost.Gold;
    delete mockUnit.cost.Food;
    const generatedCosInfo = component.generateCostInfo(mockUnit);
    expect(component.generateCostInfo).toHaveBeenCalled();
    expect(generatedCosInfo).toEqual('Wood:50');
  })


  it('should return empty string for null cost value',()=>{
    expect(component.generateCostInfo(mockUnitNull)).toBe('');
  })

  it('should trigger an event on row click',()=> {
    component.onUpdate(mockUnit);
    expect(router.navigate).toHaveBeenCalledWith([`unit-details`],{ queryParams: { id: 1 } });
  })

  it('should render the table headers correctly', () => {
    const headers = fixture.debugElement.queryAll(By.css('th'));
    const headerTexts = headers.map((header) => header.nativeElement.textContent.trim());
    expect(headerTexts).toEqual(['ID', 'Name', 'Age', 'Costs']);
  });

});
