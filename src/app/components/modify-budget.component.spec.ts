import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBudgetComponent } from './modify-budget.component';

describe('ModifyBudgetComponent', () => {
  let component: ModifyBudgetComponent;
  let fixture: ComponentFixture<ModifyBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
