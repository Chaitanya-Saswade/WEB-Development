import React from "react";
import './ProductCard.css'  //This is used to Connect CSS File

function ProductC() {

    return ( 
    <div  className="product" style={{ backgroundColor:'beige' , border:'2px solid black'}}>
        <img src="https://www.cakesworld.in/images/category/butterscotch_cake_2026.jpg" height="150px" width="150px" />
        <h2>Cake</h2>
        <p>Rs.999/-</p>
        <p>Buy Now</p>
    </div>
    )
}

export default ProductC

// There is no term id in React