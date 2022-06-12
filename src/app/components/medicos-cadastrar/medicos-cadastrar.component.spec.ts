import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosCadastrarComponent } from './medicos-cadastrar.component';

describe('MedicosCadastrarComponent', () => {
  let component: MedicosCadastrarComponent;
  let fixture: ComponentFixture<MedicosCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicosCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
