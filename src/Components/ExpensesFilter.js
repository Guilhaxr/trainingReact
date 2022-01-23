
import "../Css/ExpensesFilter.css"



const ExpensesFilter = ({onFilterData, selectYear}) => {

  //This fuction has the action of takes the value from "select form" and put that value as argument in the fuction call;
  //Lifting the state up means pass some value from child to father;
  const filterHandler = (event) => {

    //This data (year) is goes trought Expense.js and  stops in App.js;
    onFilterData(event.target.value)
  }

  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select  value={selectYear} onChange={filterHandler} >
          <option value="2022" >2022</option>
          <option value="2021" >2021</option>
          <option value="2020" >2020</option>
          <option value="2019" >2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;