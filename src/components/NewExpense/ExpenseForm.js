// importing the style for styling the form.
import './ExpenseForm.css'
// importing the use state from react.
import { useState } from 'react';
// This funciton will render the form into the page.
const ExpenseForm = () => {
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
    return(
        // This form will get render into the App.js to add new expenses.
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    {/* below we've added the event listner and whenever the event occurs this will call the handler */}
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    {/* below we've added the event listner and whenever the event occurs this will call the handler */}
                    <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    {/* below we've added the event listner and whenever the event occurs this will call the handler */}
                    <input type="date" min='2019-01-01' max='2020-12-31' onChange={dateChangeHandler}/>
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