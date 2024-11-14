import { Component } from '@angular/core';
import { VoidButtonComponent } from '../../shared/void-button/void-button.component';
import { VoidGroupButtonComponent } from '../../shared/void-group-button/void-group-button.component';

@Component({
  selector: 'app-group-button-test',
  standalone: true,
  imports: [VoidGroupButtonComponent],
  templateUrl: './group-button-test.component.html',
  styleUrl: './group-button-test.component.scss'
})
export class GroupButtonTestComponent {

  onCancel(){
    console.log("Teste cancel void group btn");
  }

  onSave(){
    console.log("Teste save void group btn");
  }
}
