// importing css file for styling the expensesfilter component.
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const droupDownChangeHandler = (event) =>{
    // this function will access the year value and then send it to the onChange attribute in the form of props into the Expenses.js
    props.onChangeFilter(event.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        {/* below we are passing the dropDownChangeHandler for handling the change events in below dropdown values */}
        <select value={props.selected} onChange={droupDownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;