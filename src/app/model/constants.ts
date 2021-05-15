import { MonthlySpending } from "./monthly-spending";

export const TRANSACTIONS = "TRANSACTIONS";

export const BUDGET = "BUDGET";

export const SUBMIT = "Submit"

export const DEFAULT_BUDGET_DATE = "0000-01"

export const EMPTY_DEFAULT_BUDGET: MonthlySpending = {
    id: -1,
    type: BUDGET,
    date: DEFAULT_BUDGET_DATE,
    inProgress: false,
    isDefault: true,
    rent: 0,
    groceries: 0,
    travel: 0,
    restaurants: 0,
    loans: 0,
    clothing: 0,
    general_merchandise: 0,
    home_improvement: 0,
    hobbies: 0,
    cable: 0,
    entertainment: 0,
    gifts: 0,
    utilities: 0,
    atm: 0,
    gas: 0,
    healthcare: 0,
    subscriptions: 0,
    gym: 0,
    automotive: 0,
    food_delivery: 0,
    taxes: 0,
    transportation: 0,
    uber: 0,
    charitable_giving: 0,
    mortgage: 0,
    total: 0,
}