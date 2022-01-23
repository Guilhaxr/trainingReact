import './App.css';
import { useState } from 'react';
import Expenses from "./Components/Expenses"
import NewExpense from './Components/NewExpense/NewExpense';

function App() {

  const dummyExpenses = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: "9.2",
        date: new Date(2020, 7, 4)
    },
    {
        id: "e2",
        title: "Mac M1",
        amount: "1400",
        date: new Date(2021, 9, 10)
    },
    {
        id: "e3",
        title: "Bed",
        amount: "560",
        date: new Date(2019, 8, 28)
    },
    {
        id: "e4",
        title: "Car Insurance",
        amount: "346",
        date: new Date(2020, 1, 16)
    },

]

  const[expenses, setExpenses] = useState(dummyExpenses)

  

  
// this fuctions takes the new  expenses data from child (form) and the dummy data.
const addExpenseHandler = expense =>{
  setExpenses((preExpenses)=>{
    return [expense,  ...preExpenses]
  });
}
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses  items={expenses} />
    </div>
  );
}

export default App;
