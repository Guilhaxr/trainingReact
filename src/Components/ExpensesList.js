import ExpenseItem from "./ExpenseItem";
import "../Css/ExpensesList.css"

const ExpensesList = ({items}) =>{
    

    // let expensesContet = <p className="NoExpensesMessage"> No expenses found.</p> ;

    if(items.length === 0){
        return <h2 className="expenses-list__fallback" >Found no expenses.</h2>
    }

    return(
    <ul className="expenses-list">
        {
        items.map((element) =>
        <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
         />
        )}
    </ul>
    )
}

export default ExpensesList;