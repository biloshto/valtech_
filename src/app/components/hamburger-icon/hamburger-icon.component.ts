import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-hamburger-icon',
  templateUrl: './hamburger-icon.component.html',
  styleUrls: ['./hamburger-icon.component.less'],
})
export class HamburgerIconComponent implements OnChanges {
  @Input() bitten?: boolean = false;
  @Output() bittenEmitter = new EventEmitter<boolean>();

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.bitten) {
      this._cdr.detectChanges();
    }
  }

  toggle(): void {
    this.bitten = !this.bitten;
    this.bittenEmitter.emit(this.bitten);
  }
}
