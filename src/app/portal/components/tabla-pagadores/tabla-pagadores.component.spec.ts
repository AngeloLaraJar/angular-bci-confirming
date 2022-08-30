import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPagadoresComponent } from './tabla-pagadores.component';

describe('TablaPagadoresComponent', () => {
  let component: TablaPagadoresComponent;
  let fixture: ComponentFixture<TablaPagadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPagadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPagadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
