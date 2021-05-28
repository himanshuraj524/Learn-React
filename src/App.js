// This is the file which get executed whenever the react project gets loaded into the browser, and in this file we will import all the other components.
// below we are importing the component which we are going to use to show the expenses.
import Expenses from './components/Expenses';
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
    }

  ]
  return (
    <div>
      <h2>Hey boy you can do it.</h2>
      {/* below we are sending the expenses object to the Expenses component */}
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
