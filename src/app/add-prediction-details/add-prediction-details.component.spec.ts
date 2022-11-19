import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPredictionDetailsComponent } from './add-prediction-details.component';

describe('AddPredictionDetailsComponent', () => {
  let component: AddPredictionDetailsComponent;
  let fixture: ComponentFixture<AddPredictionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPredictionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPredictionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
