// below we have imported the css file for stylig the component.
import './ExpenseItem.css';

// This is our first custom component.
// now we will access the variables that are coming from the App.js into our component in React the data comes in the form of props but we can use any name we want and this props comes in the form of function arguments.
function ExpenseItem(props) {
    return(
        // In react function based components we cannot have multiple root elements, so for that we will create one element and inside that element we store all the other element. 
        // now we will access the props values into the below jsx.
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    )
}

// here we will export this component by using default export`
export default ExpenseItem;