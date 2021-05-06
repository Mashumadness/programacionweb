import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccederMediosComponent } from './acceder-medios.component';

describe('AccederMediosComponent', () => {
  let component: AccederMediosComponent;
  let fixture: ComponentFixture<AccederMediosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccederMediosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccederMediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
