import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getUnitById } from 'app/store/units/unit.selector';
import { AppState } from 'app/store/app.state';
import { Store } from '@ngrx/store';
import { Unit } from 'app/model/unit.interface';

@Component({
  selector: 'app-unit-details-table',
  templateUrl: './unit-detail-table.component.html',
  styleUrl: './unit-detail-table.component.scss'
})
export class UnitDetailTableComponent implements OnInit {
  selectedUnit?: Unit;
  unitId: string;

  constructor(private store:Store<AppState>, private router: ActivatedRoute){}

  ngOnInit() {
    const unitIdParam  = this.router.snapshot.queryParamMap.get('id') || '';
    this.setUnitId(unitIdParam);
    this.getUnitByStore();
  }

  setUnitId(id:string) {
    this.unitId = id;
  }

  getUnitByStore() {
    this.store.select(getUnitById(parseInt(this.unitId))).subscribe((unit)=> {
      this.selectedUnit = unit;
    });
  }
}
