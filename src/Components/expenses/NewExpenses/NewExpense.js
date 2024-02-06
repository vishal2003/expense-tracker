import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = (props) => {

    const [isAddNewExpense, setIsAddNewExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {

            ...enteredExpenseData,
            id: Math.random().toString()

        };

        props.onAddExpense(expenseData);

    };

    const addANewExpense = () => {
        setIsAddNewExpense(true);
    };

    const cancelAddingNewExpense = () => {
        setIsAddNewExpense(false);
    }

    return (
        <div className='new-expense'>
            {isAddNewExpense === false ? (<button onClick={addANewExpense}>Add Expenses</button>) : (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelAddNewExpense={cancelAddingNewExpense} />
            )}
        </div>
    );
};

export default NewExpense;