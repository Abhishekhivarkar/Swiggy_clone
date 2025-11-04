import { useState, useEffect } from "react";
import axios from "axios";

export function Cart() {
  const [cart, setCart] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("http://localhost:4001/cart"); 
        setCart(res.data);
      } catch (err) {
        console.error("Error fetching cart:", err.message);
      }
    };
    fetchCart();
  }, []);

  const handleIncrease = async (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

    // optional backend sync
    try {
      await axios.put(`http://localhost:4001/cart/${id}`, {
        action: "increase",
      });
    } catch (err) {
      console.error("Error updating cart:", err.message);
    }
  };

  const handleDecrease = async (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );

    try {
      await axios.put(`http://localhost:4001/cart/${id}`, {
        action: "decrease",
      });
    } catch (err) {
      console.error("Error updating cart:", err.message);
    }
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
  <div className="max-w-[700px] mx-auto p-6 min-h-screen border border-black flex items-center justify-center">
    <div className="h-[600px] w-[800px] border border-black">
      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border-b py-3"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">₹{item.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleDecrease(item._id)}
                className="bg-gray-200 px-3 py-1 rounded text-lg font-bold"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleIncrease(item._id)}
                className="bg-gray-200 px-3 py-1 rounded text-lg font-bold"
              >
                +
              </button>
            </div>

            <div className="font-semibold">
              ₹{item.price * item.quantity}
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="flex justify-between mt-6 text-xl font-bold">
          <p>Total</p>
          <p>₹{totalPrice}</p>
        </div>
      )}
    </div>
    </div>
  );
}

