import ExpenseItem from "./ExpenseItem"
import "../Css/Expenses.css"
import "./ExpensesFilter"
import Card from "./Card"
import { useState } from "react"
import ExpensesFilter from "./ExpensesFilter"
const Expenses = ({items}) => {
    const [filterDate, setFilterDate] = useState("2020");


    

    const saveFilterDataHandler = (enteredFilterData) =>{
        setFilterDate(enteredFilterData)
        console.log(enteredFilterData)
    }


    //filtered date, by selecting date form
    const filterdExpenses = items.filter((e)=>{
       return  e.date.getFullYear().toString() === filterDate
    }) 


    

    return(
        <div>
            
            <Card className="expenses">
                < ExpensesFilter selectYear={filterDate} onFilterData={saveFilterDataHandler}/>

                { filterdExpenses.map((element) =>
                    <ExpenseItem
                    key={element.id}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                     />
                )}
        
            </Card>
        </div>
    )
}

export default Expenses;