import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropertyImagesComponent } from './add-property-images.component';

describe('AddPropertyImagesComponent', () => {
  let component: AddPropertyImagesComponent;
  let fixture: ComponentFixture<AddPropertyImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPropertyImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropertyImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
