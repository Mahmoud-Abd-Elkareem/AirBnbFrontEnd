import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsuccessComponent } from './hostsuccess.component';

describe('HostsuccessComponent', () => {
  let component: HostsuccessComponent;
  let fixture: ComponentFixture<HostsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
