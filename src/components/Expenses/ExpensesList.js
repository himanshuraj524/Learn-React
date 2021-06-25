// Here i am creating a new component to store the Expneses in list format.
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

    // here will preform the third way of conditional statements.
    if (props.item.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found.</h2>
    }
    return (
        <ul className="expenses-list">
            {props.item.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
        </ul>
    )
};

export default ExpensesList;