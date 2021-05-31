// Import ExpenseItem Component.
import ExpenseItem from './ExpenseItem';
// import the Expenses.css
import './Expenses.css'
// import Card component
import Card from './Card'
function Expenses(props){
    // This component will show the expenses into the page.
    return(
        <Card className="expenses">
            {/* below we have used the imported component and its a rule in react the everytime we will write the component first letter in capital */}
            
            {/* below we will pass the values of the objects in the form of attributes into the below component by using {} */}
            <ExpenseItem name={props.item[0].name} price={props.item[0].price} date={props.item[0].date} />
            <ExpenseItem name={props.item[1].name} price={props.item[1].price} date={props.item[1].date} />
            <ExpenseItem name={props.item[2].name} price={props.item[2].price} date={props.item[2].date} />
            <ExpenseItem name={props.item[3].name} price={props.item[3].price} date={props.item[3].date} />
            {/* The above data is sent into the component in the form of the props */}
        </Card>
    )
}

export default Expenses;