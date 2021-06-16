import {
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ModalRef } from '../shared/models/modal-ref';
import { ModalService } from '../shared/components/modal/service/modal.service';
import { fade } from '../shared/animations/fade/fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade],
})
export class AppComponent {
  public title = 'a11y-formacao-angular-alura';
  public form!: FormGroup;
  public firstName: string = 'Rafael';
  public modalRef!: ModalRef;
  public info: boolean = false;
  @ViewChild('modalTemplate') public modalTemplateRef!: TemplateRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.form = this.formBuilder.group({
      angularTagsYesNoAnswer: [
        {
          value: 'yes',
          disabled: false,
        },
      ],

      htmlTagsYesNoAnswer: [
        {
          value: 'yes',
          disabled: false,
        },
      ],
    });
  }

  public submit(): void {
    console.log('OBS: HtmlTagsYesNoButtonGroup IS NOT CATCHING VALUES');
    console.log(this.form.value);
  }

  public show() {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User details',
    });
  }
}
