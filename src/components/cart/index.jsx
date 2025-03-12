"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Plans from "../data/plans";

const Cart = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (planId) {
      const selectedPlan = Plans.find((plan) => plan.id === Number(planId));
      if (selectedPlan) {
        setCartItems([selectedPlan]); // Allow only one plan selection at a time
      }
    }
  }, [planId]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">
          No plans selected. Go to{" "}
          <a href="/pricing" className="text-indigo-600 underline">
            Pricing
          </a>
          .
        </p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-gray-700">
                  <th className="p-3 text-left">Plan</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b text-gray-700">
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">${item.price}</td>
                    <td className="p-3">{item.duration || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Total: ${totalPrice}</h2>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
