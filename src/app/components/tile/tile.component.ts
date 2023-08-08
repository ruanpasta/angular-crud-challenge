import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Status } from 'src/app/core/types/status.enum';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() name = '';
  @Input() cnpj = '';
  @Input() status: Status = Status.Inativo;
  @Output() onEdit: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() onRemove: EventEmitter<MouseEvent> = new EventEmitter();

  isActive() {
    return this.status === Status.Ativo
  }
}
