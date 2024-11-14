import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-void-group-button',
  standalone: true,
  imports: [
    CommonModule, //ok
    MatIconModule //ok
    ],
  templateUrl: './void-group-button.component.html',
  styleUrl: './void-group-button.component.scss'
})
export class VoidGroupButtonComponent {

  // Propriedades de entrada
  @Input() btnCount: number = 1;
  @Input() texts: string[] = ['Button', 'Voltar', 'Prosseguir', 'Login', 'Redefinir senha']; // teste

  @Input() btnText: string = 'Button'; // Texto do botão único

  // Agrupados
  @Input() btnFirstTitle: string = '';
  @Input() btnSecondTitle: string = '';

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
  onClick2(): void {
    if (!this.btnDisabled) {
      this.clicked.emit();
    }
  }

  onClick(buttonId: string) {
    if (!this.btnDisabled) {
      this.clicked.emit();
      switch (buttonId) {
        case 'single':
          console.log("Botão único clicado");
          break;
        case 'first':
          console.log("Primeiro botão do grupo clicado");
          break;
        case 'second':
          console.log("Segundo botão do grupo clicado");
          break;
        default:
          console.log("Outro botão");
      }
    }
  }

}
