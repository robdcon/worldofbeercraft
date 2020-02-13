import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbvFilterComponent } from './abv-filter.component';

describe('AbvFilterComponent', () => {
  let component: AbvFilterComponent;
  let fixture: ComponentFixture<AbvFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbvFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbvFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
