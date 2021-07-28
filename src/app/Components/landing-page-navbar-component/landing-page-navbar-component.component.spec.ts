import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageNavbarComponentComponent } from './landing-page-navbar-component.component';

describe('LandingPageNavbarComponentComponent', () => {
  let component: LandingPageNavbarComponentComponent;
  let fixture: ComponentFixture<LandingPageNavbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageNavbarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
