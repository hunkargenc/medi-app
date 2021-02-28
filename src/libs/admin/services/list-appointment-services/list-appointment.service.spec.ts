import { TestBed } from '@angular/core/testing';

import { ListAppointmentService } from './list-appointment.service';

describe('ListAppointmentService', () => {
  let service: ListAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
