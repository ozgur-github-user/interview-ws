import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UnitDetailsComponent } from './unit-details.component';

describe('UnitDetailsComponent', () => {
  let component: UnitDetailsComponent;
  let fixture: ComponentFixture<UnitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitDetailsComponent],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
