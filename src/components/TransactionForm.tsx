import React, { useState } from 'react';
import type { Transaction } from '../types';

interface TransactionFormProps {
  onAddTransaction: (transaction: Omit<Transaction, 'id'>) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onAddTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<'income' | 'expense'>('income');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAddTransaction({ text, amount, type });
    setText('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter transaction..."
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          placeholder="Enter amount..."
        />
      </div>
      <div>
        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button>Add transaction</button>
    </form>
  );
};

export default TransactionForm; 