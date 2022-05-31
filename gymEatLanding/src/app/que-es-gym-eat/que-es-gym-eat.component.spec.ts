import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsGymEatComponent } from './que-es-gym-eat.component';

describe('QueEsGymEatComponent', () => {
  let component: QueEsGymEatComponent;
  let fixture: ComponentFixture<QueEsGymEatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueEsGymEatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueEsGymEatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
