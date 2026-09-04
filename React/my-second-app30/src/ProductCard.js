import React from "react";
import './ProductCard.css'  //This is Used To COnnect css File
import Btn from "./Button";


function ProductC(){

    return(
        <div className="product"    style={{ backgroundColor:'beige' , border:'1px solid black' }}>
             <img src="https://images.pexels.com/photos/5610333/pexels-photo-5610333.jpeg"  height="150"  width="150"  />
             <h2>Cake</h2>
             <p>Rs 999</p>
             <Btn />
        </div>
    )


}

export default ProductC