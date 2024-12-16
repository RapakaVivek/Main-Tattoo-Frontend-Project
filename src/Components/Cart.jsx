import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, incrementQuantity, decrementQuantity } from "./CartComp";
import { Link } from "react-router-dom";
import { clearCartFromRedux, deleteItemFromCart, incrementItemQuantity } from "../authapis";


const Cart = () => {
  const [cart,setcart] =useState([])
  const cartdetails = useSelector((state) => state.carts);
  const userdetails = useSelector((state) => state.users);
  const serverurl = useSelector((state) => state.serverurl);
  const dispatch = useDispatch();
  
  useEffect(() =>{
    if(cartdetails){
      setcart(cartdetails?.items)
    console.log("cart",cartdetails)
    }
  },[cartdetails])

 

 
  // let user_id = "675891db1853d9f7ae96b8ff"

 

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Cart</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Booking</th>
            <th>Actions</th>
           
          </tr>
        </thead>

        <tbody>
          {cart.map((item, index) => (

            <tr key={index}>


              <td>
                {/* <Link to="/selectProduct" state={{ id: item.design_id }}> */}
                  <img
                    src={item?.design?.image}
                    alt={item.title}
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                {/* </Link> */}
              </td>
              <td>
                {item?.design?.name}
                <br />
                {/* <small>
          <strong>Booking Date:</strong> {item.bookingDetails?.date || "N/A"}
          <br />
          <strong>Booking Time:</strong> {item.bookingDetails?.time || "N/A"}
        </small> */}
              </td>
              <td>${item?.design?.price}</td>
              <td>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-secondary btn-sm me-2"
                    onClick={() => dispatch(incrementItemQuantity(item?.design?._id,item?.quantity-1,userdetails._id,serverurl?.url))}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className="btn btn-secondary btn-sm ms-2"
                    onClick={() => dispatch(incrementItemQuantity(item?.design?._id,item?.quantity+1,userdetails._id,serverurl?.url))}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>${item?.subtotal}</td>
             
              <td>
                <Link to="/booking" state={{designid:item?.design?._id,artistid:item?.design?.artist_id}}>
                  <button
                    className="btn btn-primary btn-sm"
                  // onClick={() => dispatch(removeFromCart(item))}

                  >
                    Book
                  </button>
                </Link>

              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(deleteItemFromCart(item?.design?._id,userdetails._id,serverurl?.url))}
                >
                  Remove
                </button>
              </td>

            </tr>
          ))} 
        </tbody>

       

      </table>
      {/* <h4 className="text-end">Total: ${calculateTotal()}</h4> */}
      <button className="btn btn-danger w-100 mt-3" onClick={() => dispatch(clearCartFromRedux(userdetails._id,serverurl?.url))}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;




// import React, { useEffect } from 'react'

// const Cart = () => {

// //   useEffect(() => {
// //     fetch('localhost:5200/api/tattoos')
// //         .then(res => res.json())
// //         .then(json => console.log(json))
// // }, [])

// // const fetchdata=async()=>{
// //   let response=await fetch('localhost:5200/api/tattoos')
// //   let data=await response.json()
// //   console.log(data)
// // }

// const handleAddToCart = async (item) => {
//   const response = await fetch("http://localhost:5100/api/cart", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(item), // Send item details to the server
//   });

//   if (response.ok) {
//     console.log("Item added to cart successfully!");
//   } else {
//     console.error("Failed to add item to cart.");
//   }
// };

//   return (
//     <div>

//     </div>
//   )
// }

// export default Cart