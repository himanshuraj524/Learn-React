// importing the style into this component.
import './NewExpense.css'
// importing the form component to use it here.
import ExpenseForm from './ExpenseForm';
// this function will render the NewExpense component into the page.
const NewExpense = (props) => {
    // here we are using the props to access the function that is coming in the form of props from the App.js.
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // This function will get passed inside the ExpensForm component in the form of props to get the new expense data.
        const expenseData = {
            // object to store the data which we are getting from the ExpenseForm.
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // here we are sending the expenseData into App.js by using the function that has been created into the App.js. 
        props.onAddExpense(expenseData);
    }

    return(
        <div className="new-expense">
            {/* below we are sending the saveExpenseDataHandler function in the form of props to get the newExpense data. */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
};
// exporting to use it in App.js
export default NewExpense;