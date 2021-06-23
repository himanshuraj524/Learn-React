// This is the file which get executed whenever the react project gets loaded into the browser, and in this file we will import all the other components.
// below we are importing the component which we are going to use to show the expenses.
import Expenses from './components/Expenses/Expenses';
// Importing the NewExpense component.
import NewExpense from './components/NewExpense/NewExpense';
// importing use state.
import { useState } from 'react';

// object for sending the values.
 const DUMMY_EXPENSES= [
  {
  id:'e1',
  title:'Iphone12Mini',
  amount:'699',
  date:new Date(2021, 4, 20)
  },
  {
  id:'e2',
  title:'Iphone12',
  amount:'799',
  date:new Date(2021, 4, 22)
  },
  {
  id:'e3',
  title:'Iphone12Pro',
  amount:'999',
  date:new Date(2021, 4, 24)
  },
  {
  id:'e4',
  title:'Iphone12ProMax',
  amount:'1599',
  date:new Date(2021, 4, 26)
  },

];


function App() {
  // now we will use props(properties) to send the data into our components.
  // function below is used to show the data that has been coming from the NewExpense component.
  // setting the initial state.
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onAddExpense = expenses => {
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses]
    })
  };
  return (
    <div>
      {/* This is used to add new expenses into the app */}
      {/* below we are passing onAddExpense function as a prop to get the data. */}
      <NewExpense onAddExpense = {onAddExpense} />
      {/* below we are sending the expenses object to the Expenses component */}
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
