import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onAddExpense}) => {

    //This function has the action of takes the value from ExpenseForm.js child
    // and creates a a object to send for the App.js father;
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        
        //This functions call is from App.js father, Im sending the object created in the function above;
        onAddExpense(expenseData);
        
    }

    return(
        <div className="new-expense">

            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;