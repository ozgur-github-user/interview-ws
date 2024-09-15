import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UnitService } from './services/unit-data.service';
import { loadUnits } from './store/units/unit.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  
  title = 'aoe2-units';
  unitService = inject(UnitService)

  constructor(private store: Store) {}

  ngOnInit() {
      this.loadUnits();
  }

  loadUnits() {
    this.unitService.loadUnitData().subscribe(
      (res) => {
      this.store.dispatch(loadUnits({ units: res.units }));
      },(error)=> {
        console.log('Unable to load data', error);
      });
  }

}
