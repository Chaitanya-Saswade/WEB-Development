import React from "react";
import Btn from "./Button";

function App() {

// Div Tag acts like a Fragment

return(

        <div>
        <h1>Hello Guys, How are You Doing...?</h1>
        <hr></hr>

        
        {/* Every Tag in React should be Closed. */}
        <label>UserName: </label>
        <input  />
        <br></br>

        <button>Log IN</button>

        <Btn />
        <Btn />
        <Btn />
        </div>



)
}

export default App;