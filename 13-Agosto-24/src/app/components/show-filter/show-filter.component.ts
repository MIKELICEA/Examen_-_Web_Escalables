import { Component, EventEmitter, Output } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-filter',
  standalone: true,
  imports: [],
  templateUrl: './show-filter.component.html',
  styleUrl: './show-filter.component.css'
})
export class ShowFilterComponent {
  @Output() onOrderByABC = new EventEmitter<void>();
  @Output() onOrderByEpisode = new EventEmitter<void>();
  @Output() onOrderByYear = new EventEmitter<void>();

  public orderByABC(){
    this.onOrderByABC.emit();
  }
  public orderByEpisode(){
    this.onOrderByEpisode.emit();
  }
  public orderByYear(){
    this.onOrderByYear.emit();
  }
}