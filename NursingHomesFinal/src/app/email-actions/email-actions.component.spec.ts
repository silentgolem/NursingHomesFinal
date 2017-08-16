import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailActionsComponent } from './email-actions.component';

describe('EmailActionsComponent', () => {
  let component: EmailActionsComponent;
  let fixture: ComponentFixture<EmailActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
