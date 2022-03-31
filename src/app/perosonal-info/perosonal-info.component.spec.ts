import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerosonalInfoComponent } from './perosonal-info.component';

describe('PerosonalInfoComponent', () => {
  let component: PerosonalInfoComponent;
  let fixture: ComponentFixture<PerosonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerosonalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerosonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
