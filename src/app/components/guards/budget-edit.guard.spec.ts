import { TestBed } from '@angular/core/testing';

import { BudgetEditGuard } from './budget-edit.guard';

describe('BudgetEditGuard', () => {
  let guard: BudgetEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BudgetEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
