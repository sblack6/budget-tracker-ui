
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

export const BUDGET_NUMERIC_ENTRIES = [
    {
        field: 'rent',
        displayName: 'Rent'
    },
    {
        field: 'automotive',
        displayName: 'Automotive'
    },
    {
        field: 'atm',
        displayName: 'Cash'
    },
    {
        field: 'cable',
        displayName: 'Cable'
    },
    {
        field: 'charitable_giving',
        displayName: 'Charitable Giving'
    },
    {
        field: 'clothing',
        displayName: 'Clothing'
    },
    {
        field: 'entertainment',
        displayName: 'Entertainment'
    },
    {
        field: 'food_delivery',
        displayName: 'Food Delivery'
    },
    {
        field: 'gas',
        displayName: 'Gas'
    },
    {
        field: 'general_merchandise',
        displayName: 'General Merchandise'
    },
    {
        field: 'gifts',
        displayName: 'Gifts'
    },
    {
        field: 'groceries',
        displayName: 'Groceries'
    },
    {
        field: 'gym',
        displayName: 'Gym'
    },
    {
        field: 'healthcare',
        displayName: 'Healthcare'
    },
    {
        field: 'hobbies',
        displayName: 'Hobbies'
    },
    {
        field: 'home_improvement',
        displayName: 'Home Improvement'
    },
    {
        field: 'loans',
        displayName: 'Loans'
    },
    {
        field: 'mortgage',
        displayName: 'Mortgage'
    },
    {
        field: 'restaurants',
        displayName: 'Restaurants'
    },
    {
        field: 'subscriptions',
        displayName: 'Subscriptions'
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
        field: 'travel',
        displayName: 'Travel'
    },
    {
        field: 'uber',
        displayName: 'Uber'
    },
    {
        field: 'utilities',
        displayName: 'Utilities'
    },
    {
        field: 'total',
        displayName: 'Total'
    }
]

export const ALL_BUDGET_FIELDS = [
    {
        field: 'id',
        displayName: 'ID'
    },
    {
        field: 'date',
        displayName: 'Month'
    },
    {
        field: 'type',
        displayName: 'Type'
    },
    {
        field: 'inProgress',
        displayName: 'In Progress?'
    },
    {
        field: 'default',
        displayName: 'Default Budget?'
    },
    {
        field: 'rent',
        displayName: 'Rent'
    },
    {
        field: 'automotive',
        displayName: 'Automotive'
    },
    {
        field: 'atm',
        displayName: 'Cash'
    },
    {
        field: 'cable',
        displayName: 'Cable'
    },
    {
        field: 'charitable_giving',
        displayName: 'Charitable Giving'
    },
    {
        field: 'clothing',
        displayName: 'Clothing'
    },
    {
        field: 'entertainment',
        displayName: 'Entertainment'
    },
    {
        field: 'food_delivery',
        displayName: 'Food Delivery'
    },
    {
        field: 'gas',
        displayName: 'Gas'
    },
    {
        field: 'general_merchandise',
        displayName: 'General Merchandise'
    },
    {
        field: 'gifts',
        displayName: 'Gifts'
    },
    {
        field: 'groceries',
        displayName: 'Groceries'
    },
    {
        field: 'gym',
        displayName: 'Gym'
    },
    {
        field: 'healthcare',
        displayName: 'Healthcare'
    },
    {
        field: 'hobbies',
        displayName: 'Hobbies'
    },
    {
        field: 'home_improvement',
        displayName: 'Home Improvement'
    },
    {
        field: 'loans',
        displayName: 'Loans'
    },
    {
        field: 'mortgage',
        displayName: 'Mortgage'
    },
    {
        field: 'restaurants',
        displayName: 'Restaurants'
    },
    {
        field: 'subscriptions',
        displayName: 'Subscriptions'
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
        field: 'travel',
        displayName: 'Travel'
    },
    {
        field: 'uber',
        displayName: 'Uber'
    },
    {
        field: 'utilities',
        displayName: 'Utilities'
    },
    {
        field: 'total',
        displayName: 'Total'
    }
]