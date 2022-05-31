import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogotipoAnimadoComponent } from './logotipo-animado.component';

describe('LogotipoAnimadoComponent', () => {
  let component: LogotipoAnimadoComponent;
  let fixture: ComponentFixture<LogotipoAnimadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogotipoAnimadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogotipoAnimadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
