import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTagsYesNoButtonGroupComponent } from './html-tags-yes-no-button-group.component';

describe('HtmlTagsYesNoButtonGroupComponent', () => {
  let component: HtmlTagsYesNoButtonGroupComponent;
  let fixture: ComponentFixture<HtmlTagsYesNoButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlTagsYesNoButtonGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlTagsYesNoButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
