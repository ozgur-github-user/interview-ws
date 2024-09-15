import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';


const material = [
  MatButtonToggleModule,
  MatCheckboxModule,
  MatSliderModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[material]
})
export class MaterialModule { }
