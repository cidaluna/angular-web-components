import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-void-button',
  standalone: true,
  imports: [
    CommonModule, //ok
    MatIconModule //ok
  ],
  templateUrl: './void-button.component.html',
  styleUrl: './void-button.component.scss'
})
export class VoidButtonComponent {

  // Propriedades de entrada
  @Input() btnCount: number = 1;
  @Input() btnText: string = 'Button'; // Texto do botão único
  @Input() btnIcon?: string;            // Ícone opcional
  @Input() btnSize: 'small' | 'medium' | 'large' = 'medium'; // Tamanho do botão
  @Input() btnColor: 'bg-blue' | 'bg-yellow' | 'bg-gray' | 'bg-red' | 'bg-outline' = 'bg-blue'; // Cor do botão
  @Input() btnOutline: boolean = false; // Se o botão deve ser outline
  @Input() btnType: 'button' | 'submit' | 'reset' = 'button'; // Tipo do botão HTML5
  @Input() btnDisabled: boolean = false; // Se o botão está desabilitado

  @Output() clicked = new EventEmitter<void>(); // Evento de clique

  // Definindo as classes do botão com base nas entradas
  get buttonClasses(): string[] {
    const classes = ['button'];

    if (this.btnColor) {
      classes.push(this.btnColor);
    }

    if (this.btnSize) {
      classes.push(this.btnSize);
    }

    if (this.btnOutline) {
      classes.push('outline');
    }

    if (this.btnIcon) {
      classes.push('icon');
    }

    if (this.btnDisabled) {
      classes.push('disabled');
    }

    return classes;
  }

  // Estilos dinâmicos para botões tipo outline
  get buttonStyles(): { [key: string]: string } {
    return {
      'background-color': this.btnOutline ? 'transparent' : '',
      'border-color': this.btnOutline ? '#007bff' : '',
      'color': this.btnOutline ? '#007bff' : ''
    };
  }

  // Método para disparar o evento de clique
  onClick(): void {
    if (!this.btnDisabled) {
      this.clicked.emit();
    }
  }
}
