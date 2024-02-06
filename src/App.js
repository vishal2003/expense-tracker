import { useState } from 'react';

import Expenses from './Components/expenses/Expenses';
import NewExpense from './Components/expenses/NewExpenses/NewExpense';
import "./App.css";

const App = () => {

  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
    <div className='body'>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
      <p className='head_title'>Expense Tracker</p>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </>
  );

}
export default App;