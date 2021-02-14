import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentFormContainerComponent } from './appointment-form-container.component';

describe('AppointmentFormContainerComponent', () => {
  let component: AppointmentFormContainerComponent;
  let fixture: ComponentFixture<AppointmentFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
