import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VigilanciacomunitariaPage } from './vigilanciacomunitaria.page';

describe('VigilanciacomunitariaPage', () => {
  let component: VigilanciacomunitariaPage;
  let fixture: ComponentFixture<VigilanciacomunitariaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VigilanciacomunitariaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VigilanciacomunitariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
