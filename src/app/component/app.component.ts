import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalRef } from '../shared/models/modal-ref';
import { ModalService } from '../shared/components/modal/service/modal.service';
import { fade } from '../shared/animations/fade/fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade],
})
export class AppComponent implements OnInit {
  public title = 'a11y-formacao-angular-alura';
  public formYesNoButtonGroup!: FormGroup;
  public formModal!: FormGroup;
  public firstName: string = 'Rafael';
  public modalRef!: ModalRef;
  public info: boolean = false;
  @ViewChild('modalTemplate') public modalTemplateRef!: TemplateRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.formYesNoButtonGroup = this.formBuilder.group({
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

    this.formModal = this.formBuilder.group({
      firstName: ['Rafael', [Validators.required]],
      surname: ['', [Validators.required]],
      age: ['', [Validators.required]],
      info: [false],
    });
  }

  public submitYesNoButton(): void {
    console.log('OBS: HtmlTagsYesNoButtonGroup IS NOT CATCHING VALUES');
    console.log(this.formYesNoButtonGroup.value);
  }

  public submitModal(): void {
    if (this.formModal.invalid) {
      return;
    }
    console.log(this.formModal.value);
    this.modalRef.close();
  }

  public show() {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User details',
    });
  }
}
