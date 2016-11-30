/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IsChargingComponent } from './is-charging.component';

describe('IsChargingComponent', () => {
  let component: IsChargingComponent;
  let fixture: ComponentFixture<IsChargingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsChargingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsChargingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
