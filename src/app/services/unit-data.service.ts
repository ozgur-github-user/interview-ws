import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Units } from "app/model/unit.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class UnitService {
    http = inject(HttpClient);

    private DATASOURCE_URL = 'assets/data/age-of-empires-units.json';

    loadUnitData(): Observable<Units> {
        return this.http.get<Units>(this.DATASOURCE_URL);
    }

}