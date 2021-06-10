// This is the file which get executed whenever the react project gets loaded into the browser, and in this file we will import all the other components.
// below we are importing the component which we are going to use to show the expenses.
import Expenses from './components/Expenses/Expenses';
// Importing the NewExpense component.
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  // now we will use props(properties) to send the data into our components.
  // object for sending the values.
  const expenses= [
    {
    name:'Iphone12Mini',
    price:'699',
    date:new Date(2021, 4, 20)
    },
    {
    name:'Iphone12',
    price:'799',
    date:new Date(2021, 4, 22)
    },
    {
    name:'Iphone12Pro',
    price:'999',
    date:new Date(2021, 4, 24)
    },
    {
    name:'Iphone12ProMax',
    price:'1599',
    date:new Date(2021, 4, 26)
    },

  ];
  // function below is used to show the data that has been coming from the NewExpense component.
  const onAddExpense = expense => {
    console.log('In App.js');
    console.log(expense);
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
