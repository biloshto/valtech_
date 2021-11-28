import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { IMenuItem } from './../../models/menu-item.model';
import {
  onLargeDevice,
  smoothScrollToElement,
  trackByIdx,
} from './../../utils/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @HostListener('window:resize', ['$event.target'])
  handleMenuVisibility() {
    this.onLargeDevice = onLargeDevice();
    this.menuVisible = this.onLargeDevice;
  }

  menuItems: IMenuItem[] = [
    { id: 'contactButton', text: 'Section one', isActive: true },
    { id: 'filter', text: 'Section two' },
    { id: 'teasers', text: 'Section three' },
    { id: 'contactForm', text: 'Section four' },
  ];
  menuVisible!: boolean;
  onLargeDevice!: boolean;

  trackByIdx = trackByIdx;

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.handleMenuVisibility();
  }

  setActive(idx: number): void {
    this.menuItems = [...this.menuItems].map((item, i) => {
      return { ...item, isActive: i === idx };
    });
    if (!this.onLargeDevice) this.menuVisible = false;
    smoothScrollToElement(this.menuItems[idx].id);
    this._cdr.detectChanges();
  }

  toggleMenu(hamburgerBitten: boolean): void {
    this.menuVisible = hamburgerBitten;
  }
}
