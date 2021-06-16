import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularTagsYesNoButtonGroupComponent } from './angular-tags-yes-no-button-group.component';
import { KeyboardManagerModule } from '../../directives/keyboard-manager/keyboard-manager.module';

@NgModule({
  declarations: [AngularTagsYesNoButtonGroupComponent],
  imports: [CommonModule, KeyboardManagerModule],
  exports: [AngularTagsYesNoButtonGroupComponent],
})
export class AngularTagsYesNoButtonGroupModule {}
