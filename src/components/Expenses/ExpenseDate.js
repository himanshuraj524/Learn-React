// import the css file.
import './ExpenseDate.css';
// This is a third component which we will use inside the Expense item component.
function ExpenseDate(props){
    // here we will modify the date's by storing them into the variables.
    const Month = props.date.toLocaleString('en-US',{ month: 'long' }); 
    const Day = props.date.toLocaleString('en-US',{ day: '2-digit' }); 
    const Year = props.date.getFullYear();
    return(
        <div className="expense-date">
            <div className="expense-date__day">{Day}</div>
            <div className="expense-date__month">{Month}</div>
            <div className="expense-date__year">{Year}</div>
        </div>
    )

}

export default ExpenseDate;