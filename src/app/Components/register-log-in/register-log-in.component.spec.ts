import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLogInComponent } from './register-log-in.component';

describe('RegisterLogInComponent', () => {
  let component: RegisterLogInComponent;
  let fixture: ComponentFixture<RegisterLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
