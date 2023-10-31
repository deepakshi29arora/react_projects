import React,{useEffect, useState} from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

// contact={contactsArray}
function App() {
  
  const [contact,setContact]=useState([])
  const Local_Storage_Key=contact;
const addContacthandler=(param)=>
{
  console.log(param)
  setContact((prev)=>[...prev,param])
}

useEffect(()=>{
  localStorage.setItem("Local_Storage_Key",JSON.stringify(contact))
  },[contact])

useEffect(()=>{
  const retreiveContacts = JSON.parse(localStorage.getItem("Local_Storage_Key"));
  if(retreiveContacts) setContact(retreiveContacts);
  },[])


  return (
    <div className="App">
      <Header/>
      <AddContact addContacthandler={addContacthandler}/>
      <ContactList contact={contact}/>  
    </div>
  );
}

export default App;
