//import user state
import { useState } from 'react';
// importing the style into this component.
import './NewExpense.css'
// importing the form component to use it here.
import ExpenseForm from './ExpenseForm';
// this function will render the NewExpense component into the page.
const NewExpense = (props) => {
    // below we are setting the state to false for using it into the add new expense button.
    const [isEditing, setIsEditing] = useState(false);
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
        // this will hide the form and show's the add new expense button.
        setIsEditing(false);
    }

    // below function will show the form when user clicks on add new expense button.
    const startEditingHandler = () =>{
        setIsEditing(true);
    }
    // below function will hide the form when user clicks on add new expense button.
    const stopEditingHandler = () =>{
        setIsEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}> Add New Expense</button>}
            {/* below we are sending the saveExpenseDataHandler function in the form of props to get the newExpense data. */}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={stopEditingHandler}/>}
        </div>
    )
};
// exporting to use it in App.js
export default NewExpense;