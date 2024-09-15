import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Unit } from 'app/model/unit.interface';


@Component({
  selector: 'app-unit-table',
  templateUrl: './unit-table.component.html',
  styleUrl: './unit-table.component.scss'
})
export class UnitTableComponent {

  @Input({ required: true }) units!: Unit[];
  
  constructor(private router: Router){}

  generateCostInfo(unit: Unit) {
    if (!unit.cost) {
      return '';
    }

    const costEntries = Object.entries(unit.cost)
      .filter(([value]) => value)
      .map(([key, value]) => `${key}:${value}`);

    return costEntries.join(', ');
  }

  onUpdate(unit: Unit) {
    this.router.navigate([`unit-details`], { queryParams: { id: unit.id }})
  }
}
