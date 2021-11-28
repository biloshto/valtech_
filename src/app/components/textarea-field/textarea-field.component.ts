import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.less'],
})
export class TextareaFieldComponent {
  @Input() id!: number | string;
  @Input() label?: string = '';
  @Input() placeholder?: string = '';
  @Input() rows?: number = 5;

  constructor() {}
}
