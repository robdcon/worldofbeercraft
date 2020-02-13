import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiplinksComponent } from './skiplinks.component';

describe('SkiplinksComponent', () => {
  let component: SkiplinksComponent;
  let fixture: ComponentFixture<SkiplinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiplinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiplinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
