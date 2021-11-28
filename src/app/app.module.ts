import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactButtonComponent } from './components/contact-button/contact-button.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { TeasersComponent } from './components/teasers/teasers.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { HamburgerIconComponent } from './components/hamburger-icon/hamburger-icon.component';
import { TeaserComponent } from './components/teaser/teaser.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { TextareaFieldComponent } from './components/textarea-field/textarea-field.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CheckboxFieldComponent } from './components/checkbox-field/checkbox-field.component';
import { AboutUserComponent } from './components/about-user/about-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactButtonComponent,
    ContactFormComponent,
    TeasersComponent,
    FilterComponent,
    HeaderComponent,
    FooterComponent,
    SearchFieldComponent,
    HamburgerIconComponent,
    TeaserComponent,
    InputFieldComponent,
    TextareaFieldComponent,
    UserListComponent,
    CheckboxFieldComponent,
    AboutUserComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
