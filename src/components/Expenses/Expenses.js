//importing useState
import { useState } from 'react';
// Import ExpenseItem Component and Expenses Filter component.
import ExpenseItem from '../Expenses/ExpenseItem';
// importing expenses filter to use them inside the Cards to filter out the expenses based on the date.
import ExpensesFilter from '../NewExpense/ExpensesFilter';
// import the Expenses.css
import '../Expenses/Expenses.css'
// import Card component
import Card from '../UI/Card'
function Expenses(props){
    // this function set the default state of the year filter, it send the selectedYear into the setFilteredYear function to change the state of the component and the filteredYear value get sent into the selected attribute to set a default state of the year.
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    // This component will show the expenses into the page.
    return(
        <Card className="expenses">
            {/* below we have used the imported component and its a rule in react the everytime we will write the component first letter in capital */}
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {/* below we will pass the values of the objects in the form of attributes into the below component by using {} */}
            <ExpenseItem name={props.item[0].name} price={props.item[0].price} date={props.item[0].date} />
            <ExpenseItem name={props.item[1].name} price={props.item[1].price} date={props.item[1].date} />
            <ExpenseItem name={props.item[2].name} price={props.item[2].price} date={props.item[2].date} />
            <ExpenseItem name={props.item[3].name} price={props.item[3].price} date={props.item[3].date} />
            {/* The above data is sent into the component in the form of the props */}
        </Card>
    )
}

export default Expenses;