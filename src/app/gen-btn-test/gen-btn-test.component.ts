import { Component, Input, OnInit } from '@angular/core';
import { ButtonConfig, GenBtnComponent } from "../shared/gen-btn/gen-btn.component";

@Component({
  selector: 'app-gen-btn-test',
  standalone: true,
  imports: [GenBtnComponent],
  templateUrl: './gen-btn-test.component.html',
  styleUrl: './gen-btn-test.component.scss'
})
export class GenBtnTestComponent{


  singleButton: ButtonConfig[] = [
    {
      btnText: 'Login',
      btnColorText: 'blue',
      btnBackgroundColorText: '#e0f7fa',
      btnSize: 'large',
      hasIcon: true,
      isDisabled: false,
      isBasicFormat: false,
      isOutlineFormat: false,
      action: () => this.login(),
    }
  ]

  coupleButton: ButtonConfig[] = [
    {
      btnText: 'Voltar',
      btnColorText: 'red',
      btnBackgroundColorText: '#ffcdd2',
      btnSize: 'medium',
      hasIcon: true,
      isDisabled: false,
      isBasicFormat: true,
      isOutlineFormat: true,
      action: () => this.cancelar(),
    },
    {
      btnText: 'Prosseguir',
      btnColorText: 'green',
      btnBackgroundColorText: '#c8e6c9',
      btnSize: 'medium',
      hasIcon: false,
      isDisabled: false,
      isBasicFormat: false,
      isOutlineFormat: false,
      action: () => this.prosseguir(),
    },
  ];

  login() {
    console.log('Clicou no login');
  }

  cancelar() {
    console.log('Clicou em cancelar');
  }

  prosseguir() {
    console.log('Clicou em prosseguir');
    }
}
