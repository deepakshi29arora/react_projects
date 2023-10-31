import React,{useState} from "react";

const AddContact=(props)=>
{
    const[details,setDetails]=useState({
        name:"",
        email:""
    })
    const handleChange=(e)=>
    {
        const name=e.target.name;
        const value=e.target.value;
        setDetails((previousValues)=>
        {
            return {...previousValues,[name]:value}
        })

    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        props.addContacthandler(details);
        setDetails(()=>({
            name: "",
            email: ""
        }))
        //console.log(details);
    }


    return(
    <div>
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange}></input>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email Id" onChange={handleChange}></input>
                </div>
                <button className="ui button blue">Submit</button>


            </form>
        </div>
    </div>
    )
}

export default AddContact;