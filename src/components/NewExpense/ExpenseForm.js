// importing the style for styling the form.
import './ExpenseForm.css'
// importing the use state from react.
import { useState } from 'react';
// This funciton will render the form into the page.
const ExpenseForm = (props) => {
    // above we are using props to send the data from child to parent component.

    // Below we are using multiple useState to get the values of the input fields.
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    
    // below we've multiple event handlers for handling the multiple event fields.
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        
    };
    
    // This function will handle the submit event of form.  
    const submitHandler = (event) => {
        event.preventDefault(); //this function prevent the default behaviour of form, i.e page reloading.
        // here we will store the data in an object.
        const enteredData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        // here we are sending the data into the parent component by using the function that has been created in the NewExpense file but it has passed as props, when the new expense will get add it will send the above object into the parent component. 
        props.onSaveExpenseData(enteredData);

        // console.log(enteredData); //testing

        // here we are using two way binding for storing the data into the object at the time of form submittion and then below we will reset the form as well.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return(
        // This form will get render into the App.js to add new expenses.
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    {/* below we've added the event listner and whenever the event occurs this will call the handler */}
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    {/* below we've added the event listner and whenever the event occurs this will call the handler */}
                    <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    {/* below we've added the event listner and whenever the event occurs this will call the handler */}
                    <input type="date" min='2019-01-01' max='2020-12-31' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};
// exporting it to use in the NewExpense.js
export default ExpenseForm;