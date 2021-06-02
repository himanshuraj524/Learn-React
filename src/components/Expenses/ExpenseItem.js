// below we have imported the css file for stylig the component.
import '../Expenses/ExpenseItem.css';
// here we will import the useState library from react to make our page dynamic.
import { useState } from 'react';
// here we will import the ExpenseDate item.
import ExpenseDate from '../Expenses/ExpenseDate';
// import the card component here
import Card from "../UI/Card";
// This is our first custom component.
// now we will access the variables that are coming from the App.js into our component in React the data comes in the form of props but we can use any name we want and this props comes in the form of function arguments.
function ExpenseItem(props) { 
    // here we have used the useState funcction of react to change the name of a particular expense item, use state take one agrument that is that particular element that we want to dynamically change and it return's one variable(the current state of the element) and the second is a function that is being used for changing the state of that variable. !important: useState dosen't change the exact value of the value it just store it and whenever someone call the setName function then it will change the value but the original value will be stored in the memory.
    const [name, setName] = useState(props.name);
    function clickHandler(){
        // this handler is used to call the setName function whenever the user clicks on the button.
        setName('newName'); //this is how the state of an element gets change in react.
        console.log(name);  //testing

    }
    console.log(name);  //testing
    
    return(
        // In react function based components we cannot have multiple root elements, so for that we will create one element and inside that element we store all the other element. 
        // now we will access the props values into the below jsx.
        <Card className="expense-item">
            <ExpenseDate date={props.date} /> {/* we can use our component like this too, and here we will pass the prop date value which is coming from the App.js into this component as attribute*/}
            <div className="expense-item__description">
                <h2>{name}</h2>
                <div className="expense-item__price">${props.price}</div>
                <button type="submit" onClick={clickHandler}>Update!</button>
            </div>
        </Card>
    )
}

// here we will export this component by using default export`
export default ExpenseItem;