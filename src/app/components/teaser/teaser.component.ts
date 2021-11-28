import { Component, Input } from '@angular/core';
import { ITeaser } from './../../models/teaser.model';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.less'],
})
export class TeaserComponent {
  @Input() teaser!: ITeaser;

  constructor() {}
}
