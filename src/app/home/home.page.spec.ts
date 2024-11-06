import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('suma de dos numeros de manera correcta', () => {
    const resultado = component.sumar(10,20);
    expect(resultado).toEqual(30);
  }); 

  it('texto en mayusculas de manera correcta', () => {
    const resultado = component.toMayuscula('hola');
    expect(resultado).toEqual('HOLA');
  }); 
});
