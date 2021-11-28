import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.less'],
})
export class InputFieldComponent {
  @Input() id!: number | string;
  @Input() type?: 'email' | 'number' | 'text' = 'text';
  @Input() label?: string = '';
  @Input() placeholder?: string = '';

  constructor() {}
}
