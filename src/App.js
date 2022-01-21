import './App.css';
import Expenses from "./Components/Expenses"
import NewExpense from './Components/NewExpense/NewExpense';

function App() {

  const dataExpense = [
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
        id: "e2",
        title: "Bed",
        amount: "560",
        date: new Date(2019, 8, 28)
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: "346",
        date: new Date(2020, 1, 16)
    },

]

const addExpenseHandler = expense =>{
  console.log("In app.js");
  console.log(expense);
}
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses  items={dataExpense} />
    </div>
  );
}

export default App;
