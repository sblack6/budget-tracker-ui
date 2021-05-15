
export interface MonthlySpending {
    id: number,
    type: string,
    date: string,
    inProgress: boolean,
    isDefault: boolean,
    rent: number,
    groceries: number,
    travel: number,
    restaurants: number,
    loans: number,
    clothing: number,
    general_merchandise: number,
    home_improvement: number,
    hobbies: number,
    cable: number,
    entertainment: number,
    gifts: number,
    utilities: number,
    atm: number,
    gas: number,
    healthcare: number,
    subscriptions: number,
    gym: number,
    automotive: number,
    food_delivery: number,
    taxes: number,
    transportation: number,
    uber: number,
    charitable_giving: number,
    mortgage: number,
    total: number,
}

export const BUDGET_ENTRIES = [
    {
        field: 'date',
        displayName: 'Month'
    },
    {
        field: 'type',
        displayName: 'Type'
    },
    {
        field: 'rent',
        displayName: 'Rent'
    },
    {
        field: 'groceries',
        displayName: 'Groceries'
    },
    {
        field: 'travel',
        displayName: 'Travel'
    },
    {
        field: 'restaurants',
        displayName: 'Restaurants'
    },
    {
        field: 'loans',
        displayName: 'Loans'
    },
    {
        field: 'clothing',
        displayName: 'Clothing'
    },
    {
        field: 'general_merchandise',
        displayName: 'General Merchandise'
    },
    {
        field: 'home_improvement',
        displayName: 'Home Improvement'
    },
    {
        field: 'hobbies',
        displayName: 'Hobbies'
    },
    {
        field: 'cable',
        displayName: 'Cable'
    },
    {
        field: 'entertainment',
        displayName: 'Entertainment'
    },
    {
        field: 'gifts',
        displayName: 'Gifts'
    },
    {
        field: 'utilities',
        displayName: 'Utilities'
    },
    {
        field: 'atm',
        displayName: 'Cash'
    },
    {
        field: 'gas',
        displayName: 'Gas'
    },
    {
        field: 'healthcare',
        displayName: 'Healthcare'
    },
    {
        field: 'subscriptions',
        displayName: 'Subscriptions'
    },
    {
        field: 'gym',
        displayName: 'Gym'
    },
    {
        field: 'food_delivery',
        displayName: 'Food Delivery'
    },
    {
        field: 'taxes',
        displayName: 'Taxes'
    },
    {
        field: 'transportation',
        displayName: 'Transportation'
    },
    {
        field: 'uber',
        displayName: 'Uber'
    },
    {
        field: 'charitable_giving',
        displayName: 'Charitable Giving'
    },
    {
        field: 'mortgage',
        displayName: 'Mortgage'
    },
    {
        field: 'automotive',
        displayName: 'Automotive'
    },
    {
        field: 'total',
        displayName: 'Total'
    }
]