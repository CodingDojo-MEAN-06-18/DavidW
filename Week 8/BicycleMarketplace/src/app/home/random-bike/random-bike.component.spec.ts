import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBikeComponent } from './random-bike.component';

describe('RandomBikeComponent', () => {
  let component: RandomBikeComponent;
  let fixture: ComponentFixture<RandomBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
