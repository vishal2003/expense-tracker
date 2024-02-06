import { useState } from "react";

import Card from "../UserInterface/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023');

    const FilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">

                <ExpensesFilter selectedYear={filteredYear} onChangeFilter={FilterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                {filteredExpenses.length === 0 ? (<p>No Expenses Found for the Selected Year</p>) : (
                    filteredExpenses.map((expense) =>
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />))
                }
            </Card>
        </div>
    );
}

export default Expenses;

