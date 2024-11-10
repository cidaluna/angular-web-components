import { Component } from '@angular/core';
import { VoidButtonComponent } from "../../shared/void-button/void-button.component";

@Component({
  selector: 'app-button-test',
  standalone: true,
  imports: [VoidButtonComponent],
  templateUrl: './button-test.component.html',
  styleUrl: './button-test.component.scss'
})
export class ButtonTestComponent {

  onSave(){
    console.log("Salvando...");
  }

  onCancel(){
    console.log("Cancelando...")
  }
}
