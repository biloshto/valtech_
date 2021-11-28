import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.less'],
})
export class SearchFieldComponent {
  @Input() theme?: 'search' | 'filter' = 'search';
  @Input() placeholder?: string = 'Type text here...';
  @Input() buttonText?: string = 'Search';
  @Output() onInputEmitter = new EventEmitter<string>();

  constructor() {}

  onInput(event: Event) {
    this.onInputEmitter.emit((event?.target as HTMLInputElement)?.value ?? '');
  }
}
