import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTagsYesNoButtonGroupComponent } from './angular-tags-yes-no-button-group.component';

describe('AngularTagsYesNoButtonGroupComponent', () => {
  let component: AngularTagsYesNoButtonGroupComponent;
  let fixture: ComponentFixture<AngularTagsYesNoButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularTagsYesNoButtonGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTagsYesNoButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
