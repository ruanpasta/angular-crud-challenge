import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonVariations } from 'src/app/core/types/button-variations.type';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label = '';
  @Input() variation: ButtonVariations = 'warning';
  @Input() icon: string | undefined
  @Input() disabled: boolean = false
  @Input() type: string = 'button'

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();

  @HostBinding('attr.*')
  inheritedAttributes: any;
}
