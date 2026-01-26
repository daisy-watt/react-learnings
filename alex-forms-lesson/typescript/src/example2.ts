interface Transaction {
    id: number;
    amount: number;
    type: 'deposit' | 'withdrawal';
    status: 'completed' | 'pending';
}

const transactions: Transaction[] = [
    { id: 1, amount: 500, type: 'deposit', status: 'completed' },
    { id: 2, amount: 150, type: 'withdrawal', status: 'completed' },
    { id: 3, amount: 1200, type: 'deposit', status: 'pending' },
    { id: 4, amount: 50, type: 'withdrawal', status: 'completed' },
];

//filter() returns new array with items that meets condition 
const filteredTransactions = transactions.filter(t => t.status === 'completed');
console.log(filteredTransactions);

//map() creates a new array with the same length of original with a callback fucntion on each element in array
const formattedDisplay = transactions.map(t => {
    return {
        ...t, 
        displayFormat: `$${t.amount}`
    };
});
console.log(formattedDisplay);

//reduce() performs a callback on each element / item to give us a single value
//Reduce the original array to find the total balance (Deposits add, Withdrawals subtract).

const totalBalance = transactions 
    .filter(t => t.status === 'completed')
    .reduce((acc, t) => acc + t.amount, 0)


const balance = transactions
  .filter(t => t.status === 'completed') 
  .reduce((acc, t) => acc + t.amount, 0); 