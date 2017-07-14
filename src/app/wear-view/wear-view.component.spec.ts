import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WearViewComponent } from './wear-view.component';

describe('WearViewComponent', () => {
  let component: WearViewComponent;
  let fixture: ComponentFixture<WearViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WearViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
