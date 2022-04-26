import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndergebnisComponent } from './endergebnis.component';

describe('EndergebnisComponent', () => {
  let component: EndergebnisComponent;
  let fixture: ComponentFixture<EndergebnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndergebnisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndergebnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
