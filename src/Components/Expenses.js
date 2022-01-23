
import "../Css/Expenses.css"
import "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import Card from "./Card"
import { useState } from "react"
import ExpensesFilter from "./ExpensesFilter"
const Expenses = ({items}) => {

    // My select form start in year 2020, but when I select the a new year(new value) my state will change;
    const [filterDate, setFilterDate] = useState("2020");
    
    //This function has the action of update a new value(year) when the user clicks in a new year;
    //I passed this function to the child ExpressFilter.js and I call this function with a new value as argument;
    const saveFilterDataHandler = (enteredFilterData) =>{
        setFilterDate(enteredFilterData)
        console.log(enteredFilterData)
    }


    //In this variable I'm filtering the items.
    //I create a condition that returns true when the dummy year (from items) is equal to year selected (filterDate) ;
    const filterdExpenses = items.filter((e)=>{
       return  e.date.getFullYear().toString() === filterDate
    }) 



    

    return(
        <div> 
            <Card className="expenses">
               {/* In the selectYear I'm passing the state filterDate for my select form start every time in the year 2020;*/}
                < ExpensesFilter selectYear={filterDate} onFilterData={saveFilterDataHandler}/>
                
                {/* After passing the filtered Items, into the ExpensesList.js component I'll mapping the items */}
                <ExpensesList items={filterdExpenses} />
     
            </Card>
        </div>
    )
}

export default Expenses;