// below we have imported the css file for stylig the component.
import './ExpenseItem.css';

// This is our first custom component.
function ExpenseItem() {
    return(
        // In react function based components we cannot have multiple root elements, so for that we will create one element and inside that element we store all the other element. 
        <div className="expense-item">
            <div>March 28th 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$294.67</div>
            </div>
        </div>
    )
}

// here we will export this component by using default export`
export default ExpenseItem;