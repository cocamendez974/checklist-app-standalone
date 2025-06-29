import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have menu labels', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(4);
    expect(menuItems[0].textContent).toContain('Dashboard');
    expect(menuItems[1].textContent).toContain('Listas para Registrar');
    expect(menuItems[2].textContent).toContain('Checklist');
    expect(menuItems[3].textContent).toContain('Resultados');
  });

  it('should have urls', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(4);
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual(
      '/dashboard'
    );
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual(
      '/listas'
    );
    expect(menuItems[2].getAttribute('ng-reflect-router-link')).toEqual(
      '/lista'
    );
    expect(menuItems[3].getAttribute('ng-reflect-router-link')).toEqual(
      '/resultados'
    );
  });
});
