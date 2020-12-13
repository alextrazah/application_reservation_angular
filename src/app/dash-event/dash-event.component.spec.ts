import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEventComponent } from './dash-event.component';

describe('DashEventComponent', () => {
  let component: DashEventComponent;
  let fixture: ComponentFixture<DashEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
