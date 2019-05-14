import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalizacaoComponent } from './geolocalizacao.component';

describe('GeoLocComponent', () => {
  let component: GeolocalizacaoComponent;
  let fixture: ComponentFixture<GeolocalizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocalizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
