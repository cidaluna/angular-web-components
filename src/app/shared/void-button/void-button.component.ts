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
  @Input() text: string = 'Button';  // Texto do botão
  @Input() icon?: string;            // Ícone opcional
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // Tamanho do botão
  @Input() color: 'bg-blue' | 'bg-yellow' | 'bg-gray' | 'bg-red' | 'bg-outline' = 'bg-blue'; // Cor do botão
  @Input() outline: boolean = false; // Se o botão deve ser outline
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // Tipo do botão HTML5
  @Input() disabled: boolean = false; // Se o botão está desabilitado

  @Output() clicked = new EventEmitter<void>(); // Evento de clique

  // Definindo as classes do botão com base nas entradas
  get buttonClasses(): string[] {
    const classes = ['button'];

    if (this.color) {
      classes.push(this.color);
    }

    if (this.size) {
      classes.push(this.size);
    }

    if (this.outline) {
      classes.push('outline');
    }

    if (this.icon) {
      classes.push('icon');
    }

    if (this.disabled) {
      classes.push('disabled');
    }

    return classes;
  }

  // Estilos dinâmicos para botões tipo outline
  get buttonStyles(): { [key: string]: string } {
    return {
      'background-color': this.outline ? 'transparent' : '',
      'border-color': this.outline ? '#007bff' : '',
      'color': this.outline ? '#007bff' : ''
    };
  }

  // Método para disparar o evento de clique
  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
