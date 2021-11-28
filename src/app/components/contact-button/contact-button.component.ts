import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.less'],
})
export class ContactButtonComponent {
  private static readonly encodedMailAddress =
    'bWsuY29udGFjdEB2YWx0ZWNoLmNvbQ==';

  constructor() {}

  contact(): void {
    window.location.href =
      'mailto:' + atob(ContactButtonComponent.encodedMailAddress);
  }
}
