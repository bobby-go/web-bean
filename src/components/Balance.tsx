import React from 'react';
import type { Transaction } from '../types';

interface BalanceProps {
  transactions: Transaction[];
}

const Balance: React.FC<BalanceProps> = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
      <div>
        <div>
          <h4>Income</h4>
          <p>${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p>${expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance; 