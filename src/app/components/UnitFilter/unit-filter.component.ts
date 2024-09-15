import { Component, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { UnitsStorageService } from 'app/services/unit-storage-service';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FilterParams, FilterRanges } from 'app/model/unit.filter.params';


@Component({
  selector: 'app-unit-filter',
  templateUrl: './unit-filter.component.html',
  styleUrl: './unit-filter.component.scss'
})

export class UnitFilterComponent implements OnInit{
  @Output() filterChange = new EventEmitter<FilterParams>();

  lsService = inject(UnitsStorageService);

  selectedAge: string = 'all';
  filterRanges = {
    wood: { min: 0, max: 200 },
    food: { min: 0, max: 200 },
    gold: { min: 0, max: 200 }
  };

  filterStates = {
    wood: false,
    food: false,
    gold: false
  };

  filterParams: FilterParams = { age: this.selectedAge, filterState: this.filterStates,  filterRanges: this.filterRanges};

  ngOnInit(): void {
      this.setFilterParamsByLS();
  }

  setFilterParamsByLS() {
    const lsFilterParams = this.lsService.getItem('filterParams');

    if(lsFilterParams) {
      this.filterParams = JSON.parse(lsFilterParams);
    }
  }

  onAgeChange(e:MatButtonToggleChange) {
    this.filterParams.age = e.value;
    this.lsService.setItem('filterParams', JSON.stringify(this.filterParams));
    this.filterChange.emit(this.filterParams);
  }

  sliderOnChange(filterName: keyof FilterRanges) {
    const filterValue = { 
      max: this.filterParams.filterRanges[filterName].max, 
      min: this.filterParams.filterRanges[filterName].min 
    };
    
    this.filterParams.filterRanges[filterName] = filterValue;
  
    this.lsService.setItem('filterParams', JSON.stringify(this.filterParams));
    this.filterChange.emit(this.filterParams);
  }

  onFilterActivated(e:MatCheckboxChange, filterName: keyof FilterRanges) {
      this.filterParams.filterState[filterName] = e.checked;
      this.lsService.setItem('filterParams', JSON.stringify(this.filterParams));
      this.filterChange.emit(this.filterParams);
  }
}
