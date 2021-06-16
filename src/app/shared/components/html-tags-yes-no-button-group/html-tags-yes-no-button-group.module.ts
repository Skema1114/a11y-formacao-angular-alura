import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlTagsYesNoButtonGroupComponent } from './html-tags-yes-no-button-group.component';
import { KeyboardManagerModule } from '../../directives/keyboard-manager/keyboard-manager.module';

@NgModule({
  declarations: [HtmlTagsYesNoButtonGroupComponent],
  imports: [CommonModule, KeyboardManagerModule],
  exports: [HtmlTagsYesNoButtonGroupComponent],
})
export class HtmlTagsYesNoButtonGroupModule {}
