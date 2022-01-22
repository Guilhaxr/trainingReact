import ExpenseItem from "./ExpenseItem"
import "../Css/Expenses.css"
import "./ExpensesFilter"
import Card from "./Card"
import { useState } from "react"
import ExpensesFilter from "./ExpensesFilter"
const Expenses = ({items}) => {
    const [filterData, setFilterData] = useState("2020")

    const saveFilterDataHandler = (enteredFilterData) =>{
        setFilterData(enteredFilterData)

    }


    

    return(
        <div>
            
            <Card className="expenses">
                < ExpensesFilter selectYear={filterData} onFilterData={saveFilterDataHandler}/>
                < ExpenseItem 
                    title={items[0].title}
                    amount={items[0].amount}
                    date={items[0].date}
                />
                < ExpenseItem 
                    title={items[1].title}
                    amount={items[1].amount}
                    date={items[1].date}
                />
                < ExpenseItem 
                    title={items[2].title}
                    amount={items[2].amount}
                    date={items[2].date}
                />
                < ExpenseItem 
                    title={items[3].title}
                    amount={items[3].amount}
                    date={items[3].date}
                />
            </Card>
        </div>
    )
}

export default Expenses;