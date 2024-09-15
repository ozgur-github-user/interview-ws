import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { UnitFilterComponent } from './unit-filter.component';
import { MatButtonToggleChange } from '@angular/material/button-toggle';


describe('UnitFilterComponent', () => {
  let component: UnitFilterComponent;
  let fixture: ComponentFixture<UnitFilterComponent>;
  let mockCheckboxUncheckedEvent: MatCheckboxChange;
  let mockCheckboxCheckedEvent: MatCheckboxChange;
  let mockButtonToggleChangeDark: MatButtonToggleChange;
  let mockButtonToggleChangeFeudal: MatButtonToggleChange;
  let mockButtonToggleChangeAll: MatButtonToggleChange;
  let mockButtonToggleChangeCastle: MatButtonToggleChange;
  let mockButtonToggleChangeImperial: MatButtonToggleChange;

  beforeEach(async () => {

    mockCheckboxUncheckedEvent = {
      checked: false,
      source: null as any // eslint-disable-line
    };

    mockCheckboxCheckedEvent = {
      checked: true,
      source: null as any // eslint-disable-line
    };


    mockButtonToggleChangeDark = {
      value: 'Dark',
      source: null as any // eslint-disable-line
    };

    mockButtonToggleChangeFeudal = {
      value: 'Feudal',
      source: null as any // eslint-disable-line
    };

    mockButtonToggleChangeAll = {
      value: 'All',
      source: null as any // eslint-disable-line
    };

    mockButtonToggleChangeCastle ={
      value: 'Castle',
      source: null as any // eslint-disable-line
    };

    mockButtonToggleChangeImperial ={
      value: 'Imperial',
      source: null as any // eslint-disable-line
    };

    await TestBed.configureTestingModule({
      declarations: [UnitFilterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set age dark property on onAgeChange event',() => {
    spyOn(component, 'onAgeChange').and.callThrough();

    const toggleGroup = fixture.debugElement.query(By.css('mat-button-toggle-group'));

    toggleGroup.triggerEventHandler('change', mockButtonToggleChangeDark);

    expect(component.onAgeChange).toHaveBeenCalledWith(mockButtonToggleChangeDark);
    expect(component.filterParams.age).toBe('Dark');
  })

  it('should set feudal dark property on onAgeChange event',() => {
    spyOn(component, 'onAgeChange').and.callThrough();

    const toggleGroup = fixture.debugElement.query(By.css('mat-button-toggle-group'));
    toggleGroup.triggerEventHandler('change', mockButtonToggleChangeFeudal);

    expect(component.onAgeChange).toHaveBeenCalledWith(mockButtonToggleChangeFeudal);
    expect(component.filterParams.age).toBe('Feudal');
  })

  it('should set all dark property on onAgeChange event',() => {
    spyOn(component, 'onAgeChange').and.callThrough();

    const toggleGroup = fixture.debugElement.query(By.css('mat-button-toggle-group'));
    toggleGroup.triggerEventHandler('change', mockButtonToggleChangeAll);

    expect(component.onAgeChange).toHaveBeenCalledWith(mockButtonToggleChangeAll);
    expect(component.filterParams.age).toBe('All');
  })

  it('should set castle dark property on onAgeChange event',() => {
    spyOn(component, 'onAgeChange').and.callThrough();

    const toggleGroup = fixture.debugElement.query(By.css('mat-button-toggle-group'));
    toggleGroup.triggerEventHandler('change', mockButtonToggleChangeCastle);

    expect(component.onAgeChange).toHaveBeenCalledWith(mockButtonToggleChangeCastle);
    expect(component.filterParams.age).toBe('Castle');
  })

  it('should set imperial dark property on onAgeChange event',() => {
    spyOn(component, 'onAgeChange').and.callThrough();

    const toggleGroup = fixture.debugElement.query(By.css('mat-button-toggle-group'));
    toggleGroup.triggerEventHandler('change', mockButtonToggleChangeImperial);

    expect(component.onAgeChange).toHaveBeenCalledWith(mockButtonToggleChangeImperial);
    expect(component.filterParams.age).toBe('Imperial');
  })

  it('should set true checked property of food filter',() => {
    spyOn(component, 'onFilterActivated').and.callThrough();

    const checkBoxFood = fixture.debugElement.query(By.css('mat-checkbox[name="food"]'));
    checkBoxFood.triggerEventHandler('change', mockCheckboxCheckedEvent);

    expect(component.onFilterActivated).toHaveBeenCalledWith(mockCheckboxCheckedEvent, 'food');
    expect(component.filterParams.filterState.food).toBeTrue();
  })

  it('should set true checked property of wood filter',()=>{
    spyOn(component, 'onFilterActivated').and.callThrough();

    const checkBoxWood = fixture.debugElement.query(By.css('mat-checkbox[name="wood"]'));
    checkBoxWood.triggerEventHandler('change', mockCheckboxCheckedEvent);
  
    expect(component.filterParams.filterState.wood).toBeTrue();
  })

  it('should set true checked property of gold filter',()=>{
    spyOn(component, 'onFilterActivated').and.callThrough();
    const checkBoxGold = fixture.debugElement.query(By.css('mat-checkbox[name="gold"]'));
    
    checkBoxGold.triggerEventHandler('change', mockCheckboxCheckedEvent);

    expect(component.onFilterActivated).toHaveBeenCalledWith(mockCheckboxCheckedEvent, 'gold');
    expect(component.filterParams.filterState.gold).toBeTrue();
  })

  it('should set false checked property of gold filter',()=>{
    spyOn(component, 'onFilterActivated').and.callThrough();

    const checkBoxGold = fixture.debugElement.query(By.css('mat-checkbox[name="gold"]'));
    checkBoxGold.triggerEventHandler('change', mockCheckboxUncheckedEvent);

    expect(component.onFilterActivated).toHaveBeenCalledWith(mockCheckboxUncheckedEvent, 'gold');
    expect(component.filterParams.filterState.gold).toBeFalse();
  })

  it('should set false checked property of wood filter',()=>{
    spyOn(component, 'onFilterActivated').and.callThrough();

    const checkBoxWood = fixture.debugElement.query(By.css('mat-checkbox[name="wood"]'));
    checkBoxWood.triggerEventHandler('change', mockCheckboxUncheckedEvent);
  
    expect(component.filterStates.wood).toBeFalse();
  })

  it('should set false checked property of gold filter',()=>{
    spyOn(component, 'onFilterActivated').and.callThrough();
    const checkBoxGold = fixture.debugElement.query(By.css('mat-checkbox[name="gold"]'));

    checkBoxGold.triggerEventHandler('change', mockCheckboxUncheckedEvent);

    expect(component.onFilterActivated).toHaveBeenCalledWith(mockCheckboxUncheckedEvent, 'gold');
    expect(component.filterParams.filterState.gold).toBeFalse();
  })

  it('should update wood filter ranges correctly when sliderOnChange is called for wood filter', () => {
    component.filterParams.filterRanges.wood.min = 50;
    component.filterParams.filterRanges.wood.max = 150;

    spyOn(component.filterChange, 'emit');

    component.sliderOnChange('wood');

    expect(component.filterParams.filterRanges.wood.min).toEqual(50);
    expect(component.filterParams.filterRanges.wood.max).toEqual(150);

    expect(component.filterChange.emit).toHaveBeenCalledWith(component.filterParams);
  });

  it('should update food filter ranges correctly when sliderOnChange is called for food filter', () => {
    component.filterParams.filterRanges.food.min = 30;
    component.filterParams.filterRanges.food.max = 120;

    spyOn(component.filterChange, 'emit');

    component.sliderOnChange('food');

    expect(component.filterParams.filterRanges.food.min).toEqual(30);
    expect(component.filterParams.filterRanges.food.max).toEqual(120);

    expect(component.filterChange.emit).toHaveBeenCalledWith(component.filterParams);
  });

  it('should update gold filter ranges correctly when sliderOnChange is called for gold filter', () => {
    spyOn(component.filterChange, 'emit');

    component.filterParams.filterRanges.gold.min = 10;
    component.filterParams.filterRanges.gold.max = 180;
    component.sliderOnChange('gold');

    expect(component.filterParams.filterRanges.gold.min).toEqual(10);
    expect(component.filterParams.filterRanges.gold.max).toEqual(180);

    expect(component.filterChange.emit).toHaveBeenCalledWith(component.filterParams);
  });

  it('should deactivate gold filter state, emit filterChange event when gold checkbox is unchecked', () => {
    spyOn(component.filterChange, 'emit');

    component.onFilterActivated(mockCheckboxUncheckedEvent, 'gold');

    expect(component.filterParams.filterState.gold).toBeFalse();
    expect(component.filterChange.emit).toHaveBeenCalledWith(component.filterParams);
  });

  it('should deactivate wood filter state, emit filterChange event when wood checkbox is unchecked', () => {
    spyOn(component.filterChange, 'emit');

    component.onFilterActivated(mockCheckboxUncheckedEvent, 'wood');

    expect(component.filterParams.filterState.wood).toBeFalse();
    expect(component.filterChange.emit).toHaveBeenCalledWith(component.filterParams);
  });

  it('should deactivate gold filter state, emit filterChange event when food checkbox is unchecked', () => {
    spyOn(component.filterChange, 'emit');
    
    component.onFilterActivated(mockCheckboxUncheckedEvent, 'food');

    expect(component.filterParams.filterState.food).toBeFalse();
    expect(component.filterChange.emit).toHaveBeenCalledWith(component.filterParams);
  });
});
