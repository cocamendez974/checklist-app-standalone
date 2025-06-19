import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaPage } from './lista.page';

describe('ListaPage', () => {
  let component: ListaPage;
  let fixture: ComponentFixture<ListaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
