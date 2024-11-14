import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

export interface ButtonConfig {
  btnText: string;
  btnColorText: 'blue' | 'red' | 'green';
  btnBackgroundColorText: string;
  btnSize: string;
  hasIcon?: boolean;
  isDisabled?: boolean;
  isBasicFormat: boolean;
  isOutlineFormat?: boolean;
  action: () => void;
}

@Component({
  selector: 'app-gen-btn',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './gen-btn.component.html',
  styleUrl: './gen-btn.component.scss'
})
export class GenBtnComponent {
  @Input() btnConfig!: ButtonConfig;

  @Output() btnClick = new EventEmitter<void>();

  handleClick() {
    this.btnClick.emit();
  }

}
