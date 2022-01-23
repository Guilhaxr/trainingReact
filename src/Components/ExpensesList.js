import ExpenseItem from "./ExpenseItem";
import "../Css/ExpensesList.css"

const ExpensesList = ({items}) =>{
    


    //This conditions returns a message (if is true) when the year select doesn't have items ;
    if(items.length === 0){
        return <h2 className="expenses-list__fallback" >Found no expenses.</h2>
    }

    return(
    <ul className="expenses-list">
        
        {/* Here I'm mapping the items in ExpenseItem.js component; */}
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