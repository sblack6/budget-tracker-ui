import { TestBed } from '@angular/core/testing';

import { BudgetDetailGuard } from './budget-detail.guard';

describe('BudgetDetailGuard', () => {
  let guard: BudgetDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BudgetDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
