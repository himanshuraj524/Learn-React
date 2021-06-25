//importing useState
import { useState } from 'react';
// Import ExpenseList Component and Expenses Filter component.
import ExpensesList from '../Expenses/ExpensesList';
// importing expenses filter to use them inside the Cards to filter out the expenses based on the date.
import ExpensesFilter from '../NewExpense/ExpensesFilter';
// import the Expenses.css
import '../Expenses/Expenses.css'
// import Card component
import Card from '../UI/Card'

function Expenses(props) {
    // this function set the default state of the year filter, it send the selectedYear into the setFilteredYear function to change the state of the component and the filteredYear value get sent into the selected attribute to set a default state of the year.
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    // here we will create a filteredExpenses array variable which will use the js filter method and return the new array which is filtered with the current selected year.
    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });



    // This component will show the expenses into the page.
    return (
        <li>
            <Card className="expenses">
                {/* below we have used the imported component and its a rule in react the everytime we will write the component first letter in capital */}
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* below we are using map function to send the expenses item dynamically into the ExpenseItem Component */}

                {/* here we will perform the first way of the conditonal statement. */}
                {/* {filteredExpenses.length === 0 ? <p>No Expenses Found</p> :
            filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /> )} */}

                {/* here we will perform the second way of the conditonal statement. */}
                {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>} 
            {filteredExpenses.length > 0 && filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /> )} */}

                {/* here we are sending the filteredExpenses into the list component.*/}
                <ExpensesList item={filteredExpenses} />

            </Card>
        </li>
    )
}

export default Expenses;