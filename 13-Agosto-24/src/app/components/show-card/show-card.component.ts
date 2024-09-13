import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass, NgIf } from '@angular/common';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
  @Output() public deleteCard: EventEmitter<string> = new EventEmitter();

  @Input() public show: Show = {
    description: '',
    episodes: 0,
    genre: '',
    image: '',
    likes: [],
    name: '',
    year: 0
  };

  public isSelected: boolean = false;

  constructor(private itemService: ItemService) {}

  public changeSelected(): void {
    this.isSelected = !this.isSelected;
  }

  public onDeleteCard(): void {
    this.deleteCard.emit(this.show.name);
  }

  public editItem(show: Show): void {
    this.itemService.setEditItem(show); // Abre el modal pasando el item actual
  }
}
