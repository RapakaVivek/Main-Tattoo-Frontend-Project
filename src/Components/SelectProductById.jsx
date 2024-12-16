import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../reduxapis";

const SelectProductById = () => {
  const Api = useSelector((state) => state.serverurl);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state || null;
  const [card, setCard] = useState({});
  const [time, setTime] = useState({ hour: "", minute: "", period: "AM" });
  const [date, setDate] = useState("");
  const [successMessage, setSuccessMessage] = useState(false); // State for success message
  const [bookingDetails, setBookingDetails] = useState(null); // To store booking details
  const [loading, setLoading] = useState(false); // State for loading indicator
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.users);

  const handlefetchdetails = async () => {
    console.log('fetching details for', id.id);
    const response = await fetch(`${Api.url}/api/designs/get/${id.id}`);
    const data = await response.json();
    console.log('Fetched data:', data);
    setCard(data);
  };

  useEffect(() => {
    if (id) {
      handlefetchdetails();
    }
  }, [id]);

  const handleBooking = (event) => {
    event.preventDefault();

    // Validation
    if (!date || !time.hour || !time.minute) {
      return alert("Please select both date and time.");
    }

    setLoading(true);
    const selectedTime = `${time.hour}:${time.minute} ${time.period}`;
    const details = {
      productId: id,
      productName: card.name,
      date,
      time: selectedTime,
    };

    // Save booking details to show below
    setBookingDetails(details);

    console.log("Booking Details:", details);

    // Dispatch an action to add the product and booking details to the cart
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...card,
        bookingDetails: details, // Add booking details
      },
    });

    // Show the success message
    setSuccessMessage(true);

    // Automatically hide success message after 7 seconds
    setTimeout(() => {
      setSuccessMessage(false);
      setLoading(false);
      // navigate("/cart"); // Uncomment to navigate to the cart page after booking
    }, 7000);
  };

  const handleaddtocart = async (designid) => {
    const body = {
      user_id: user?._id,
      design_id: designid,
      quantity: 1,
    };
    const response = await fetch(`${Api.url}/cart/add`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Accept-Language": "",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data.cart.items);
    dispatch(setCart(data.cart));
  };

  if (!id) {
    return <div>No product selected.</div>; // Show a fallback message if no product ID
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg rounded">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={card.image}
                  className="img-fluid rounded-start"
                  alt={card.title}
                  style={{ objectFit: "contain", height: "100%" }}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body p-4">
                  <h5 className="card-title text-primary">Name: {card.name}</h5>
                  <h4 className="text-success">Price: ${card.price}</h4>
                  <h5 className="text-danger mt-3">
                    To book the tattoo, please fill in the form below
                  </h5>
                  <button onClick={() => handleaddtocart(card._id)}>Add to Cart</button>
                  {/* Success Message */}
                  {successMessage && (
                    <div className="alert alert-success text-center mb-4">
                      Booking confirmed successfully!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3>Customer Reviews</h3>
        <p>⭐⭐⭐⭐⭐ (5/5)</p>
        <p>"Amazing product! Will definitely buy again."</p>
      </div>
    </div>
  );
};

export default SelectProductById;
