import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WearView2Component } from './wear-view2.component';

describe('WearView2Component', () => {
  let component: WearView2Component;
  let fixture: ComponentFixture<WearView2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WearView2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WearView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
