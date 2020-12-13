import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCatComponent } from './dash-cat.component';

describe('DashCatComponent', () => {
  let component: DashCatComponent;
  let fixture: ComponentFixture<DashCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
