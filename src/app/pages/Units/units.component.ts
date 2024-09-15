import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/app.state';
import { getUnits } from 'app/store/units/unit.selector';
import { UnitsStorageService } from 'app/services/unit-storage-service';
import { Unit } from 'app/model/unit.interface';
import { FilterParams } from 'app/model/unit.filter.params';


@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrl: './units.component.scss'
})

export class UnitsComponent implements OnInit{

  lsService = inject(UnitsStorageService);

  units: Unit[]= [];
  filteredUnits: Unit[]= [];

  constructor(private store:Store<AppState>) {
      this.getUnitsByStore();
  }

  ngOnInit(): void { 
    this.restoreFilterParams();
  }

  getUnitsByStore() {
    this.store.select(getUnits).subscribe((units)=> {
      this.units = units;
      this.filteredUnits = units;
    });
  }

  restoreFilterParams() {
    const lsFilterParams = this.lsService.getItem('filterParams') || '';
    this.filterChanged(JSON.parse(lsFilterParams));
  }

  filterChanged(filterParams:FilterParams) {
    this.filterUnitByAge(filterParams.age);
    this.filterUnitByCost(filterParams);
  }

  filterUnitByCost(filterParams:FilterParams) {
    const filteredUnitsByCost: Unit[] = [];

    this.filteredUnits.forEach((unit) => {
      const matchesWood =
        !filterParams.filterState.wood ||
        (unit.cost?.Wood &&
          filterParams.filterRanges.wood?.min !== undefined &&
          filterParams.filterRanges.wood?.max !== undefined &&
          unit.cost.Wood >= filterParams.filterRanges.wood.min &&
          unit.cost.Wood <= filterParams.filterRanges.wood.max);

      const matchesFood =
        !filterParams.filterState.food  ||
        (unit.cost?.Food &&
          unit.cost.Food >= filterParams.filterRanges.food.min &&
          unit.cost.Food <= filterParams.filterRanges.food.max);

      const matchesGold =
        !filterParams.filterState.gold ||
        (unit.cost?.Gold &&
          unit.cost.Gold >= filterParams.filterRanges.gold.min &&
          unit.cost.Gold <= filterParams.filterRanges.gold.max);

      if(matchesFood && matchesWood && matchesGold){
        filteredUnitsByCost.push(unit);
      }
    })

    this.filteredUnits = filteredUnitsByCost;
  }

  filterUnitByAge(age:string) {
    const filteredUnitsByAge = (age === 'all') ? this.units : this.units.filter(unit => unit.age === age);
    this.filteredUnits = filteredUnitsByAge;
  }
}
