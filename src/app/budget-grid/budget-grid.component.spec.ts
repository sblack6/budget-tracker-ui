import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetGridComponent } from './budget-grid.component';

describe('BudgetGridComponent', () => {
  let component: BudgetGridComponent;
  let fixture: ComponentFixture<BudgetGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
