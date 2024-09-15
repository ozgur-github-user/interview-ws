import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class UnitsStorageService {
  
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }
}