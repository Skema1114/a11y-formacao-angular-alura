import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './component/app.component';
import { ModalModule } from './shared/components/modal/modal.module';
import { HtmlTagsYesNoButtonGroupModule } from './shared/components/html-tags-yes-no-button-group/html-tags-yes-no-button-group.module';
import { AngularTagsYesNoButtonGroupModule } from './shared/components/angular-tags-yes-no-button-group/angular-tags-yes-no-button-group.module';
import { DisableControlModule } from './shared/directives/disable-control/disable-control.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularTagsYesNoButtonGroupModule,
    HtmlTagsYesNoButtonGroupModule,
    ReactiveFormsModule,
    FormsModule,
    DisableControlModule,
    ModalModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
