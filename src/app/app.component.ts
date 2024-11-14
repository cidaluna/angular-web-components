import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonTestComponent } from "./components/button-test/button-test.component";
import { GroupButtonTestComponent } from "./components/group-button-test/group-button-test.component";
import { GenBtnTestComponent } from './gen-btn-test/gen-btn-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonTestComponent, GroupButtonTestComponent,
    GenBtnTestComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-web-components';
}
