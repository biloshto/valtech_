import { Component } from '@angular/core';
import { trackByIdx } from './../../utils/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent {
  navLinks: string[] = new Array(4).fill('Footer Link');

  trackByIdx = trackByIdx;

  constructor() {}
}
