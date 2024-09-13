import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Show } from '../../interfaces/show.interface';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-show-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './show-form.component.html',
  styleUrl: './show-form.component.css'
})
export class ShowFormComponent implements OnInit {
  @Output() public createElement: EventEmitter<Show> = new EventEmitter();
  @Output() public updateElement: EventEmitter<Show> = new EventEmitter();

  public currentItem: Show = {
    name: '',
    description: '',
    image: '',
    episodes: 0,
    genre: '',
    likes: [],
    year: 0
  };
  
  public isEditModalOpen = false;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.currentItem.subscribe((item) => {
      if (item) {
        this.currentItem = item;
        this.openEditModal();
      }
    });
  }

  public onFormSubmit(form: NgForm): void {
    if (form.valid) {
      const newShow: Show = {
        description: form.value.description,
        episodes: 0,
        genre: '',
        image: form.value.image,
        likes: [],
        name: form.value.name,
        year: 0
      };
      this.createElement.emit(newShow);
      form.reset();
    } else {
      console.log('Faltan datos');
    }
  }

  public onEditSubmit(editForm: NgForm): void {
    if (editForm.valid && this.currentItem) {
      this.updateElement.emit(this.currentItem); 
      this.closeEditModal();
    }
  }

  public openEditModal(): void {
    this.isEditModalOpen = true;
  }

  public closeEditModal(): void {
    this.isEditModalOpen = false;
  }
}
