// This is the file which get executed whenever the react project gets loaded into the browser, and in this file we will import all the other components.
// below we will import the FirstComponent that we have created in ExpenseItem.js
import ExpenseItem from './components/ExpenseItem';
function App() {
  return (
    <div>
      <h2>Hey boy you can do it.</h2>
      {/* below we have used the imported component and its a rule in react the everytime we will write the component first letter in capital */}
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
