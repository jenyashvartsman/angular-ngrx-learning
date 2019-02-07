import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCounterViewComponent } from './basic-counter-view.component';

describe('BasicCounterViewComponent', () => {
  let component: BasicCounterViewComponent;
  let fixture: ComponentFixture<BasicCounterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCounterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCounterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
