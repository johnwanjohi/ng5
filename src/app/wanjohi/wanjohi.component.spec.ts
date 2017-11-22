import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WanjohiComponent } from './wanjohi.component';

describe('WanjohiComponent', () => {
  let component: WanjohiComponent;
  let fixture: ComponentFixture<WanjohiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WanjohiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WanjohiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
