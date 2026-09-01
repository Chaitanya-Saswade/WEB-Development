import React from "react";
import ProductC from "./ProductCard";


function App(){

  return(
    //Html Code
    <div>
         <h2>Welcome To React</h2>
         <p>This is The First Session of React , <br /> 
           <strong>Rules:</strong> 1. Every HTML Tag Needs To Be Closed <br />
           2. npx create-react-app is the command
         </p>

        <ProductC />

        <ProductC />

        <ProductC />

        <ProductC />

        <ProductC />
        
        
    </div>
  )

}

export default App