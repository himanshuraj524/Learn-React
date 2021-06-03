// importing the style into this component.
import './NewExpense.css'
// importing the form component to use it here.
import ExpenseForm from './ExpenseForm';
// this function will render the NewExpense component into the page.
const NewExpense = () => {
    return(
        <div className="new-expense">
            <ExpenseForm />
        </div>
    )
};
// exporting to use it in App.js
export default NewExpense;