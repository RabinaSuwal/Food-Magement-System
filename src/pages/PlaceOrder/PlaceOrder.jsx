import React, { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);

  const isLoggedIn = true;

  const notifyLogin = () => toast("Please login first!");
  const notifySuccess = () => toast("Payment Successful!");

  const handlePayment = () => {
    if (!isLoggedIn) {
      notifyLogin();
    } else {
      notifySuccess();
    }
  };

  return (
    <div className="container">
      <form action="" className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button type="button" onClick={handlePayment}>
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default PlaceOrder;
