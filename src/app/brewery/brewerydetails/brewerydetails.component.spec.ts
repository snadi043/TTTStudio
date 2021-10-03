import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryDetailsComponent } from './brewerydetails.component';

describe('BrewerydetailsComponent', () => {
  let component: BreweryDetailsComponent;
  let fixture: ComponentFixture<BreweryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
