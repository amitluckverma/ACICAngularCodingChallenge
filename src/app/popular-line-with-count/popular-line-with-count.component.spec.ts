import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularLineWithCountComponent } from './popular-line-with-count.component';

describe('PopularLineWithCountComponent', () => {
  let component: PopularLineWithCountComponent;
  let fixture: ComponentFixture<PopularLineWithCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularLineWithCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularLineWithCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
