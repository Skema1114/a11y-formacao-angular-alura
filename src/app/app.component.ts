import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a11y-p1-formacao-angular-alura';
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      yesNoAnswer: [
        {
          value: 'yes',
          disabled: false,
        },
      ],
      yesNoAnswerDirect: [
        {
          value: 'yes',
          disabled: false,
        },
      ],
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
