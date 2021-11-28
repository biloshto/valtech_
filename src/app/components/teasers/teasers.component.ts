import { Component } from '@angular/core';
import { ITeaser } from './../../models/teaser.model';
import { trackByIdx } from './../../utils/utils';

@Component({
  selector: 'app-teasers',
  templateUrl: './teasers.component.html',
  styleUrls: ['./teasers.component.less'],
})
export class TeasersComponent {
  teasers: ITeaser[] = [
    {
      img: 'teaser1.png',
      title: 'Teaser title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
    },
    {
      img: 'teaser2.png',
      title: 'Teaser title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: 'teaser3.png',
      title: 'Teaser title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien.',
    },
    {
      img: 'teaser4.png',
      title: 'Teaser title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Vestibulum ante ipsum…',
    },
  ];

  trackByIdx = trackByIdx;

  constructor() {}
}
