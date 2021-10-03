import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryhomeComponent } from './breweryhome.component';

describe('BreweryhomeComponent', () => {
  let component: BreweryhomeComponent;
  let fixture: ComponentFixture<BreweryhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
