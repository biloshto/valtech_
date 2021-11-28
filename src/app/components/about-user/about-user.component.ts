import { IUser } from './../../models/user.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.less'],
})
export class AboutUserComponent {
  @Input() user!: IUser;
  @Output() onOverlayClickEmitter = new EventEmitter<void>();

  constructor() {}

  onOverlayClick() {
    this.onOverlayClickEmitter.emit();
  }
}
