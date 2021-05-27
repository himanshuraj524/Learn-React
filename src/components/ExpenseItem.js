// below we have imported the css file for stylig the component.
import './ExpenseItem.css';

// This is our first custom component.
function ExpenseItem() {
    // here we will pass the values from a variable into the below jsx code.
    const name = 'Cell Phone';
    const date = new Date(2021, 4, 27);
    const price = '1800';
    // for passig the variable values into the jsx we use {} inside this we can pass the variable values.
    return(
        // In react function based components we cannot have multiple root elements, so for that we will create one element and inside that element we store all the other element. 
        <div className="expense-item">
            <div>{date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{name}</h2>
                <div className="expense-item__price">${price}</div>
            </div>
        </div>
    )
}

// here we will export this component by using default export`
export default ExpenseItem;