import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmodalcontentComponent } from './contactmodalcontent.component';

describe('ContactmodalcontentComponent', () => {
  let component: ContactmodalcontentComponent;
  let fixture: ComponentFixture<ContactmodalcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmodalcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactmodalcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
