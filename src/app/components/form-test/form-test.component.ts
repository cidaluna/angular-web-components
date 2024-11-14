import { Component, signal, Signal } from '@angular/core';
import { StringInputComponent } from '../../shared/string-input/string-input.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-test',
  standalone: true,
  imports: [CommonModule, StringInputComponent, ReactiveFormsModule],
  templateUrl: './form-test.component.html',
  styleUrl: './form-test.component.scss'
})
export class FormTestComponent {
    formTest: FormGroup;

    // Signals para armazenar mensagens de erro
    userNameError$: Signal<string | null> = signal(null);
    userEmailError$: Signal<string | null> = signal(null);
    userPasswordError$: Signal<string | null> = signal(null);

    constructor(private fb: FormBuilder) {
      this.formTest = this.fb.group({
        userName: ['', [Validators.required, Validators.minLength(3)]],
        userEmail: ['', [Validators.required, Validators.email]],
        userPassword: ['', [Validators.required, Validators.minLength(6)]]
      });

      // Monitora os erros de cada campo via Signals
      this.observeControlErrors();
    }

    // Função para observar os erros e atualizar os Signals
    private observeControlErrors() {
      // Observa o campo userName
      this.formTest.get('userName')?.statusChanges.subscribe(() => {
        const control = this.formTest.get('userName');
        this.userNameError$ = signal(this.getErrorMessage('userName'));
      });

      // Observa o campo userEmail
      this.formTest.get('userEmail')?.statusChanges.subscribe(() => {
        const control = this.formTest.get('userEmail');
        this.userEmailError$ = signal(this.getErrorMessage('userEmail'));
      });

      // Observa o campo userPassword
      this.formTest.get('userPassword')?.statusChanges.subscribe(() => {
        const control = this.formTest.get('userPassword');
        this.userPasswordError$ = signal(this.getErrorMessage('userPassword'));
      });
    }

    // Função para obter as mensagens de erro
    private getErrorMessage(controlName: string): string | null {
      const control = this.formTest.get(controlName);

      if (control?.hasError('required')) {
        return `${controlName} is required`;
      }
      if (control?.hasError('email')) {
        return 'Please enter a valid email address';
      }
      if (control?.hasError('minlength')) {
        return `The ${controlName} must be at least ${control.errors?.['minlength'].requiredLength} characters long`;
      }

      return null; // Se não houver erro, retorna null
    }

    onSubmit() {
      if (this.formTest.valid) {
        console.log(this.formTest.value);
      } else {
        console.log('Form is invalid');
      }
    }
  }
