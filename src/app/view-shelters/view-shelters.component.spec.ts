import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSheltersComponent } from './view-shelters.component';

describe('ViewSheltersComponent', () => {
  let component: ViewSheltersComponent;
  let fixture: ComponentFixture<ViewSheltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSheltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSheltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
