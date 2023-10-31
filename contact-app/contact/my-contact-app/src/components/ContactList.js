import React from "react";

import ContactCard from "./ContactCard";

const ContactList=(props)=>
{ 
   
    const renderList=props.contact.map((ele)=> //props arg of child.arg of parent i.e. contact . map(access this with ele)
    {
    return(
        
         <ContactCard contact={ele}/>
    )
    })
return <div className="ui celled list">{renderList}</div>
   
}

export default ContactList;