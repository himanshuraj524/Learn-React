// This is the file which get executed whenever the react project gets loaded into the browser, and in this file we will import all the other components.
// below we will import the FirstComponent that we have created in ExpenseItem.js
import ExpenseItem from './components/ExpenseItem';
function App() {
  // now we will use props(properties) to send the data into our components.
  // object for sending the values.
  const expenses= [
    {
    name:'Iphone12Mini',
    price:'699',
    date:new Date(2021, 4, 27)
    },
    {
    name:'Iphone12',
    price:'799',
    date:new Date(2021, 4, 27)
    },
    {
    name:'Iphone12Pro',
    price:'999',
    date:new Date(2021, 4, 27)
    },
    {
    name:'Iphone12ProMax',
    price:'1599',
    date:new Date(2021, 4, 27)
    }

  ]
  return (
    <div>
      <h2>Hey boy you can do it.</h2>
      {/* below we have used the imported component and its a rule in react the everytime we will write the component first letter in capital */}
      
      {/* below we will pass the values of the objects in the form of attributes into the below component by using {} */}
      <ExpenseItem name={expenses[0].name} price={expenses[0].price} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem name={expenses[1].name} price={expenses[1].price} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem name={expenses[2].name} price={expenses[2].price} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem name={expenses[3].name} price={expenses[3].price} date={expenses[3].date}></ExpenseItem>
      {/* The above data is sent into the component in the form of the props */}
    </div>
  );
}

export default App;
