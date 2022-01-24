import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({onAddExpense}) => {
    const [buttonSwitch, setButtonSwitch] = useState(false)

    //This function has the action of takes the value from ExpenseForm.js child
    // and creates a a object to send for the App.js father;
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        
        //This functions call is from App.js father, Im sending the object created in the function above;
        onAddExpense(expenseData);

        //This state wil change to false when the user click in submit button in ExpenseForm.js child;
        setButtonSwitch(false)
        
    }  


    const starEditingHandler = () =>{
        setButtonSwitch(true)
    }

    const cancelEditingHanlder = () => {
        setButtonSwitch(false)
    }


    

    return(
        <div className="new-expense">
            {/* When the state is false this button is rendered otherwise the ExpenseForm.js component is rendered;  */}
            {!buttonSwitch   ?
             <button onClick={starEditingHandler} >Add New expense</button> :
             <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} OnCancel={cancelEditingHanlder} />
             }
            
           
        </div>
    )
}

export default NewExpense;