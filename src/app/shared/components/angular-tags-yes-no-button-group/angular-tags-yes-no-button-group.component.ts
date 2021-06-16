import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { YesNoButtonGroupOptions } from '../../models/yes-no-button-group-options';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-angular-tags-yes-no-button-group',
  templateUrl: './angular-tags-yes-no-button-group.component.html',
  styleUrls: ['./angular-tags-yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => AngularTagsYesNoButtonGroupComponent),
    },
  ],
})
export class AngularTagsYesNoButtonGroupComponent
  implements OnInit, ControlValueAccessor
{
  @Input() public value: string = '';
  @Input() public label = '';
  @Input() public disabled = false;
  @Output() public valueChange = new EventEmitter<string>();
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) => {};
  public onTouched = () => {};
  public id!: any;

  constructor(uniqueIdService: UniqueIdService) {
    this.id = uniqueIdService.generateUniqueIdWithPrefix(
      'angular-tags-yes-no-button-group'
    );
    console.log(this.id);
  }

  public ngOnInit(): void {}

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public activate(value: string): void {
    this.writeValue(value);
  }
}
