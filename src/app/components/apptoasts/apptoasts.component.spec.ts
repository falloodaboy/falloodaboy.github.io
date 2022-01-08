import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptoastsComponent } from './apptoasts.component';

describe('ApptoastsComponent', () => {
  let component: ApptoastsComponent;
  let fixture: ComponentFixture<ApptoastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApptoastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptoastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
