import "./ExpenseForm.css"
import { useState } from "react"


const ExpenseForm = ({onSaveExpenseData, onButtonSwitch}) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    

    //other possible alternative
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : "",
    //     enteredAmount : "",
    //     enteredDate : ""
    // })

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value) 

        //other possible alternative
        // setUserInput((prevState)=>{
        //     return { ...prevState, enteredTitle : event.target.value}
        // })
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value) 

        //other possible alternative
        // setUserInput((prevState)=>{
        //     return { ...prevState, enteredAmount : event.target.value}
        // })
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value) 

        //other possible alternative
        // setUserInput((prevState)=>{
        //     return { ...prevState, enteredDate : event.target.value}
        // })
    }
    //In this function 
    const submitHandler = (event) =>{
        //has the action to the page doesn't reload when the form is sibmit;
        event.preventDefault();


        // this object has the values full filled for the user in form; 
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate)
        }
        
        // im passing data up to the parent component (NewExpense.js).
        onSaveExpenseData(expenseData)

        //clean inputs in form
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }   




return(
    <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />

            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />

            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-01-01" value={enteredDate}  onChange={dateChangeHandler} />

            </div>

        </div>
    
        <div className="new-expense__actions"> 
            <button type="button" onClick={onButtonSwitch} >Cancel</button>
            <button  type="submit" onClick={onButtonSwitch}  >Add Expense</button>
        </div>
    </form>

)
}

export default ExpenseForm;
