import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Show } from '../interfaces/show.interface';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private editItemSource = new BehaviorSubject<Show | null>(null);
  currentItem = this.editItemSource.asObservable();

  constructor() {}

  setEditItem(item: Show): void {
    this.editItemSource.next(item);
  }

  // Método para limpiar el item actual
  clearEditItem(): void {
    this.editItemSource.next(null); // Resetea el valor a null
  }
}
