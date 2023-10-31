import React, { useState } from "react";
//import './App.css';

function App() {

  const [todo,setTodo]=useState("");
  const [todos,setTodos]=useState([]);
  const [isEditMode,setisEditmode]=useState(false);
  const [id,setid]= useState();

 function handleSubmit(e)
 {

  e.preventDefault();
  if(isEditMode)
  {
    const newtodo=todos.map((ele)=>{
      console.log(ele.id,id);
      if(ele.id == id)
      {
        console.log("insideee");
        return {...ele,text:todo};
      }
      return ele;
    })

    console.log(newtodo);
    setTodos(newtodo);
    setisEditmode(false);
    setTodo("");
  }
  else
  {
  const newTodo =
  {
    id : new Date().getTime(),
    text: todo,

  }
  setTodos([...todos].concat(newTodo));
  setTodo("");
  }
 }

 function handleDelete(id)
 {
  const updatedTodos=todos.filter((ele)=>(id!==ele.id));
  setTodos(updatedTodos);
 }
 function handleEdit(id)
 {
  setisEditmode(true);
  setid(id);
  const update=todos.filter((x)=>(id==x.id))
  console.log(update[0].text);
  setTodo(update[0].text); 
 }
 function handleSave(e)
 {
  setTodo(e.target.value);
  console.log(e.target.value);
 }
  return (

    <div className="body">
      <div className="container">
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>

        <input type="text" placeholder="Add activity" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        {
        (isEditMode)?
        <button type="submit" onChange={(e) => setTodo(e.target.value)} onClick={(e)=>handleSave}> Save Changes </button>
        :
        <button type="submit" > Go </button>
        }
      </form>
      {todos.map((ele) => 
      <div key={ele.id}>
      <div>{ele.text}</div>
      <button onClick={()=>handleEdit(ele.id)}>Edit</button>
      <button onClick={()=> handleDelete(ele.id)}>Delete</button>
      </div>
      )}
    </div>
    </div>

  );
}

export default App;
