// src/components/RazorpayCheckout.js
import React from "react";
import axios from "axios";

const RazorpayCheckout = () => {
  const handlePayment = async () => {
    try {
      // Create order from your backend
      const { data: order } = await axios.post("http://localhost:5000/payment/create-order", {
        amount: 500, // ₹500
      });

      const options = {
        key: "rzp_test_deZK0OmsxLjznY", // Replace with your Razorpay key ID
        amount: order.amount,
        currency: order.currency,
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: order.id, // Razorpay Order ID
        handler: function (response) {
          // Handle payment success
          alert("Payment successful!");
          console.log(response);
          // Optional: send response.razorpay_payment_id, order_id, and razorpay_signature to backend for verification
        },
        prefill: {
          name: "ABHISHEK",
          email: "email@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initiation failed", error);
      alert("Payment failed to start.");
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handlePayment}
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Pay Now
      </button>
    </div>
  );
};

export default RazorpayCheckout;
