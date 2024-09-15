import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home.component'
import { UnitsComponent } from './pages/Units/units.component'
import { UnitDetailsComponent } from './pages/UnitDetails/unit-details.component' 

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'units', component: UnitsComponent },
  { path: 'unit-details', component: UnitDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
