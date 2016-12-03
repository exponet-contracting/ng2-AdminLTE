/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LteComponent } from './lte.component';

describe('LteComponent', () => {
  let component: LteComponent;
  let fixture: ComponentFixture<LteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
