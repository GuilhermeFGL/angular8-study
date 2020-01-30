import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDelayComponent } from './map-delay.component';

describe('MapDelayComponent', () => {
  let component: MapDelayComponent;
  let fixture: ComponentFixture<MapDelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
