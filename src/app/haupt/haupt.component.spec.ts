import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauptComponent } from './haupt.component';

describe('HauptComponent', () => {
  let component: HauptComponent;
  let fixture: ComponentFixture<HauptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HauptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HauptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
