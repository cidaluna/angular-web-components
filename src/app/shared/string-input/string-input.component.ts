import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-string-input',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './string-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StringInputComponent),
      multi: true
    }
  ],
  styleUrl: './string-input.component.scss'
})
export class StringInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() placeholder: string = '';

  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  // Especifica o valor
  writeValue(value: string): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  // Registra a função de onChange
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Registra a função de onTouched
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Função para ser chamada ao mudar o valor do input
  onInputChange(): void {
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
