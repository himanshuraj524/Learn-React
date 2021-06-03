// importing the style for styling the form.
import './ExpenseForm.css'
// This funciton will render the form into the page.
const ExpenseForm = () => {
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" min='0.01' step='0.01'/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" min='2019-01-01' max='2020-12-31'/>
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