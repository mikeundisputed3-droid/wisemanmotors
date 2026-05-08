import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const Mpesapayment = () => {
  const location = useLocation();
  const singleproduct = location.state?.singleproduct;

  // ---------------- STATES ----------------
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [usdAmount, setUsdAmount] = useState(0);
  const paypalRef = useRef(null);

  const imagepath =
    "http://aaronmbuni.alwaysdata.net/static/images/";

  // PayPal options (safe defaults; replace client-id via env when ready)
  const paypalClientId = process.env.REACT_APP_PAYPAL_CLIENT_ID || "sb";

  // ---------------- USD CONVERSION (ONLY ONCE) ----------------
  useEffect(() => {
    if (!singleproduct?.product_cost) return;

    const rate = 130;
    const raw = Number(singleproduct.product_cost);
    if (Number.isNaN(raw)) {
      setUsdAmount(0);
      return;
    }
    const usd = raw / rate;

    setUsdAmount(Number(usd.toFixed(2)));
  }, [singleproduct]);

  // Load PayPal SDK and render buttons when user selects PayPal
  useEffect(() => {
    if (paymentMethod !== "paypal" || usdAmount <= 0) return;

    setError("");
    let scriptAdded = false;
    const existing = document.getElementById("paypal-sdk");

    const renderButtons = () => {
      if (!window.paypal || !paypalRef.current) {
        setError("PayPal SDK failed to load");
        return;
      }

      // clear previous (if any)
      paypalRef.current.innerHTML = "";

      try {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: String(usdAmount.toFixed(2)),
                      currency_code: "USD",
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              try {
                const details = await actions.order.capture();
                setSuccess(
                  `Payment successful. Thank you ${details?.payer?.name?.given_name || "customer"}`
                );
                setError("");
              } catch (err) {
                console.error("capture error:", err);
                setError("PayPal payment could not be completed. Try again.");
              }
            },
            onError: (err) => {
              console.error("PayPal Buttons error:", err);
              setError("PayPal payment failed ❌");
            },
          })
          .render(paypalRef.current);
      } catch (err) {
        console.error("renderButtons error:", err);
        setError("Unable to render PayPal buttons");
      }
    };

    if (!existing) {
      const script = document.createElement("script");
      script.id = "paypal-sdk";
      script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=USD`;
      script.async = true;
      script.onload = () => renderButtons();
      script.onerror = () => setError("Failed to load PayPal SDK");
      document.body.appendChild(script);
      scriptAdded = true;
    } else {
      renderButtons();
    }

    return () => {
      // cleanup buttons and optionally the script
      if (paypalRef.current) paypalRef.current.innerHTML = "";
      if (scriptAdded) {
        const s = document.getElementById("paypal-sdk");
        if (s) s.remove();
      }
    };
  }, [paymentMethod, usdAmount, paypalClientId]);

  // ---------------- SAFETY CHECK ----------------
  if (!singleproduct) {
    return (
      <div className="container mt-5 text-center">
        <h3 className="text-danger">No product selected</h3>
      </div>
    );
  }

  // ---------------- M-PESA ----------------
  const handleMpesaPayment = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    if (!phone.startsWith("254")) {
      setError("Phone must start with 254");
      setLoading(false);
      return;
    }

    try {
      const formdata = new FormData();
      formdata.append("phone", phone);
      formdata.append("amount", singleproduct.product_cost);

      await axios.post(
        "http://aaronmbuni.alwaysdata.net/api/mpesa_payment",
        formdata
      );

      setSuccess("M-Pesa payment initiated ✔");
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "M-Pesa payment failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">

      <h2 className="text-center text-success fw-bold mb-4">
        Complete Your Purchase
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow p-4 rounded-4">

            {/* PRODUCT IMAGE */}
            <img
              src={imagepath + singleproduct.product_photo}
              alt={singleproduct.product_name}
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />

            {/* PRODUCT INFO */}
            <h4 className="text-primary">
              {singleproduct.product_name}
            </h4>

            <p className="text-muted">
              {singleproduct.product_description}
            </p>

            <h5 className="text-warning">
              KES {singleproduct.product_cost}
            </h5>

            <hr />

            {/* ALERTS */}
            {loading && (
              <div className="alert alert-info">
                Processing payment...
              </div>
            )}

            {success && (
              <div className="alert alert-success">
                {success}
              </div>
            )}

            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            {/* PAYMENT METHOD */}
            <h5>Select Payment Method</h5>

            <div className="d-flex gap-3 mb-3">
              <button
                className={`btn ${paymentMethod === "mpesa"
                  ? "btn-success"
                  : "btn-outline-success"
                  }`}
                onClick={() => setPaymentMethod("mpesa")}
              >
                M-Pesa
              </button>

              <button
                className={`btn ${paymentMethod === "paypal"
                  ? "btn-primary"
                  : "btn-outline-primary"
                  }`}
                onClick={() => setPaymentMethod("paypal")}
              >
                PayPal
              </button>
            </div>

            {/* ---------------- MPESA ---------------- */}
            {paymentMethod === "mpesa" && (
              <form onSubmit={handleMpesaPayment}>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter phone 2547XXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />

                <button
                  className="btn btn-success w-100"
                  disabled={loading}
                >
                  Pay with M-Pesa
                </button>
              </form>
            )}

            {/* ---------------- PAYPAL ---------------- */}
            {paymentMethod === "paypal" && (
              <div className="text-center mt-3">

                <h6 className="text-primary">
                  USD Amount: ${usdAmount}
                </h6>

                {usdAmount > 0 && (
                  // container where PayPal Buttons will be rendered by the SDK
                  <div ref={paypalRef} />
                )}

                {usdAmount <= 0 && (
                  <div className="text-danger">Invalid USD amount for PayPal</div>
                )}

              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Mpesapayment;