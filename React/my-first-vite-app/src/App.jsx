// import React from "react";

// function App() {


//   // Js Code - 

//   let count = 10

//   function Greet() {
//     alert ("Hi How are You?")
//   }

//   return(
//     <div>
//       <h1>Hello Guys, Welcome to React + Vite.</h1>
//       <h2> 💕{count} Likes</h2>

//       <button onClick={Greet} >Click to Get Message</button>

//       {/* In React We write the Function Name directly No ()   */}

//     </div>
//   ) 
// }

// export default App;






// Example 2 - Variables in React

// Js Variable In React

// import React from "react";

// function App() {

// let count = 0

// function increaseCount() {
//   count = count + 1;
//   console.log(count)
// }

//   return(
//     <div>
//       <h2> The Value of Count is: {count}</h2>
//       <button onClick={increaseCount}>Increase</button>
//     </div>
//   ) 
// }

// export default App;





// Example 2     useState hook = It will update your value at BackEnd and Webpage Also in React

// Basic Syntax of useState hook
// const [variableName , setVariableName ] = useState( initial Value )


// import { useState } from "react";

// function App() {

//   const[likes , setLikes] = useState(0)

//   function increaseLikes() {
//     setLikes(likes + 1)
//     console.log(likes)

//   }

//   return(
//     <div>
// <h2>Likes: {likes}</h2>
// <button onClick={increaseLikes}>Like💕</button>
//     </div>
//   ) 
// }

// export default App;





// Example 3    Another Example of useState  for Password Show and Hide

// import { useState } from "react";

// function App() {

//   const [show , setShow] = useState(false)

//   return(
//     <div>
//       <input  type= { show ?  "type" : "password" }    placeholder="Enter Your Password"   />
//       <button onClick= { ()=> setShow(!show) } >Show/Hide</button>
//         {/* If value !show is updating we have store it somewhere i.e setShow */}
//     </div>
//   ) 
// }

// export default App;





// Example 4    Another Example of useState  for Ins

import {useState} from "react";

function App() {

    const [follow , setFollow] = useState(false)

    return(
        <div>
            <button onClick={ ()=> setFollow(!follow) }> {follow ? "Following" : "Follow" }</button>
        </div>
    )
}

export default App;