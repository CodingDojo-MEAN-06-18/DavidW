import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GammaCompnentComponent } from './gamma-compnent.component';

describe('GammaCompnentComponent', () => {
  let component: GammaCompnentComponent;
  let fixture: ComponentFixture<GammaCompnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GammaCompnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GammaCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
