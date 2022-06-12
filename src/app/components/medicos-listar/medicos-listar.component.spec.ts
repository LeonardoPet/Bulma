import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosListarComponent } from './medicos-listar.component';

describe('MedicosListarComponent', () => {
  let component: MedicosListarComponent;
  let fixture: ComponentFixture<MedicosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicosListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
