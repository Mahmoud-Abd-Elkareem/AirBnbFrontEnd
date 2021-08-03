import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallpropsComponent } from './showallprops.component';

describe('ShowallpropsComponent', () => {
  let component: ShowallpropsComponent;
  let fixture: ComponentFixture<ShowallpropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallpropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallpropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
