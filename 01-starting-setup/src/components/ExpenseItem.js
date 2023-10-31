 import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React,{ useState } from "react";

const ExpenseItem=(props)=>{
const[title,setTitle]=useState(props.title)

const[amount,setAmount]=useState(props.amount)
let abc=123;

console.log("outside the function");

const clickHandler=()=>{
        setTitle("updateddd");
        setAmount("$321");
        console.log(abc);
        abc=456;
        console.log(abc);
    }

  return (
  <div className='expense-item'>
    <ExpenseDate date={props.date}></ExpenseDate>
    <div className='expense-item__description'>
    <h2> {title}</h2>
    <div className='expense-item__price'>Rs.{amount}</div>
    <button onClick={clickHandler}>Click Here!</button>
    </div>
    </div>
    );
  }

export default ExpenseItem;