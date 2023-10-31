import './ExpenseForm.css';

const ExpenseForm=()=>{

    const ClickHandler=(event)=>
    {
        console.log(event.target.value);
    };

return(<div classname="new-expense__controls">
    <div classname="new-expense__control">
        <label>Title</label>
        <input type='text' onClick={ClickHandler}/>
    </div>
    <div classname="new-expense__control">
        <label>Date</label>
        <input type='date' min='2022-09-02' max='2025-06-04'/>
    </div>
    <div classname="new-expense__control">
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01'/>
    </div>
    <div classname="new-expense__actions">
        <button>Submit</button>
    </div>

    </div>

)
}

export default ExpenseForm;