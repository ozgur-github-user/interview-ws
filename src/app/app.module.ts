import { NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './components/Blocks/Header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UnitFilterComponent } from './components/UnitFilter/unit-filter.component';
import { UnitsComponent } from './pages/Units/units.component';
import { MaterialModule } from './material/material.module';
import { UnitDetailsComponent } from './pages/UnitDetails/unit-details.component';
import { UnitDetailTableComponent } from './components/UnitDetailTable/unit-detail-table.component';
import { UnitTableComponent } from './components/UnitTable/unit-table.component';
import { FormsModule } from '@angular/forms';
import { unitReducers } from './store/units/unit.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnitFilterComponent,
    UnitsComponent,
    UnitTableComponent,
    UnitDetailsComponent,
    UnitDetailTableComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({units: unitReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true
    })
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
