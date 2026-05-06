import React, { useState } from "react";


import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";

const Checkout = () => {

  const [paymentMethod, setPaymentMethod] = useState("");
  

  //  Product Price 
  const amount = 500;

  // M-Pesa Payment Function
  const handleMpesaPayment = () => {
    alert("M-Pesa Payment Initiated");
  };

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h1 className="text-center mb-4 text-primary">
          Wiseman Motors Checkout
        </h1>

        {/* Product Section */}
        <div className="row align-items-center mb-4">

          <div className="col-md-5">
            <img
              src="images/bmw-m8.jpg"
              alt="BMW M8"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-7">
            <h2>BMW M8 Coupe</h2>

            <p>
              Luxury performance coupe with premium features.
            </p>

            <h3 className="text-success">
              KES {amount}
            </h3>
          </div>

        </div>

        {/* Payment Method Selection */}
        <h4 className="mb-3">
          Select Payment Method
        </h4>

        <div className="d-flex gap-3 mb-4">

          {/* M-Pesa */}
          <button
            className={`btn ${
              paymentMethod === "mpesa"
                ? "btn-success"
                : "btn-outline-success"
            }`}
            onClick={() => setPaymentMethod("mpesa")}
          >
            M-Pesa
          </button>

          {/* PayPal */}
          <button
            className={`btn ${
              paymentMethod === "paypal"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setPaymentMethod("paypal")}
          >
            PayPal
          </button>

        </div>

        {/* M-Pesa Payment */}
        {paymentMethod === "mpesa" && (

          <div>

            <input
              type="text"
              placeholder="Enter M-Pesa Number"
              className="form-control mb-3"
            />

            <button
              className="btn btn-success w-100"
              onClick={handleMpesaPayment}
            >
              Pay with M-Pesa
            </button>

          </div>
        )}

        {/* PayPal Payment */}
        {paymentMethod === "paypal" && (

          <div className="mt-3">

            <PayPalScriptProvider
              options={{
                "client-id": "YOUR_PAYPAL_CLIENT_ID",
              }}
            >

              <PayPalButtons

                style={{
                  layout: "vertical",
                  color: "blue",
                  shape: "pill",
                  label: "paypal",
                }}

                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: amount.toString(),
                        },
                      },
                    ],
                  });
                }}

                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    alert(
                      `Payment completed by ${details.payer.name.given_name}`
                    );
                  });
                }}

                onError={(err) => {
                  console.log(err);
                  alert("Payment Failed");
                }}

              />

            </PayPalScriptProvider>

          </div>
        )}

      </div>
    </div>
  );
};

export default Checkout;