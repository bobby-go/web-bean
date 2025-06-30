import React from 'react';
import type { Transaction } from '../types';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div>
      <h3>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.text} <span>{transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList; 