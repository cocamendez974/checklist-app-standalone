import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListasPage } from './listas.page';

describe('ListasPage', () => {
  let component: ListasPage;
  let fixture: ComponentFixture<ListasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('filterListas', () => {
    beforeEach(() => {
      component.listas = [
        { nombre: 'Lista Uno', categoria: 'Categoria A', estado: 'Activa' },
        { nombre: 'Segunda Lista', categoria: 'Categoria B', estado: 'Inactiva' },
        { nombre: 'Tercera', categoria: 'Otra', estado: 'Activa' },
      ];
    });

    it('should return all items when searchText is empty', () => {
      component.searchText = '';
      component.filterListas();
      expect(component.filteredListas.length).toBe(3);
    });

    it('should filter by name', () => {
      component.searchText = 'segunda';
      component.filterListas();
      expect(component.filteredListas).toEqual([
        { nombre: 'Segunda Lista', categoria: 'Categoria B', estado: 'Inactiva' },
      ]);
    });

    it('should filter by category', () => {
      component.searchText = 'otra';
      component.filterListas();
      expect(component.filteredListas).toEqual([
        { nombre: 'Tercera', categoria: 'Otra', estado: 'Activa' },
      ]);
    });

    it('should filter by state', () => {
      component.searchText = 'activa';
      component.filterListas();
      expect(component.filteredListas.length).toBe(2);
    });
  });
});
