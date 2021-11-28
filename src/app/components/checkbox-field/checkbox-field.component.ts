import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.less'],
})
export class CheckboxFieldComponent implements OnChanges {
  @Input() id!: number | string;
  @Input() label!: string;
  @Input() checked?: boolean = false;
  @Output() checkedEmitter = new EventEmitter<boolean>();

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.checked) {
      this._cdr.detectChanges();
    }
  }

  onChange(): void {
    this.checked = !this.checked;
    this.checkedEmitter.emit(this.checked);
  }
}
