import { useState } from 'react';
import './App.css'
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import type { Transaction } from './types';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const amount = transaction.type === 'expense' ? -transaction.amount : transaction.amount;
    const newTransaction = { ...transaction, id: Math.floor(Math.random() * 100000000), amount };
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <>
      <h1>Money Accounting System</h1>
      <Balance transactions={transactions} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={transactions} />
    </>
  )
}

export default App
