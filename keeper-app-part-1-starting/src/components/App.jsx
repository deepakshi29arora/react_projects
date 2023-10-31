import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import "../styles.css";

function App()
{
    return <div>
        <Header/>
        <Note/>
        <Footer/>
    </div>
}

export default App;