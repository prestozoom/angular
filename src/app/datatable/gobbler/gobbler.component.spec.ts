import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GobblerComponent } from './gobbler.component';

describe('GobblerComponent', () => {
  let component: GobblerComponent;
  let fixture: ComponentFixture<GobblerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GobblerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GobblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
