import './App.css';
import { useState } from 'react';
import Expenses from "./Components/Expenses"
import NewExpense from './Components/NewExpense/NewExpense';

function App() {

  const dummyExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const[expenses, setExpenses] = useState(dummyExpenses)

  

  
  // This function takes the value from NewExpense.js child(and that component takes the value from ExpensesFilter.js ) and the dummy data above.
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
