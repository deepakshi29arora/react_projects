import React from "react";
import ReactDOM  from "react-dom";
import "../styles.css";

function Footer()
{
    const year=new Date().getFullYear();
    return (
        <footer>
           <p>Copyright &#169; {year}</p>
        </footer>
    )
}

export default Footer;