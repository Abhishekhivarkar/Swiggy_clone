import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Item_details() {
  const { id } = useParams();
  const location = useLocation();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const isRestaurant = location.pathname.startsWith("/restaurant");
      const endpoint = isRestaurant ? `restaurant/${id}` : `food/${id}`;

      try {
        let res;
        try {
          res = await axios.get(`http://127.0.0.1:4001/${endpoint}`);
        } catch {
          res = await axios.get(`http://localhost:4001/${endpoint}`);
        }
        setItem(res.data);
      } catch {
        setItem(null);
      }
    };

    fetchItem();
  }, [id, location.pathname]);

  if (!item) return null; // no loading or error message

  return (
    <div className="p-6 flex flex-col items-center h-full">
      <img
        src={item.image || item.Image}
        alt={item.name}
        onError={(e) => {
          e.target.src = `http://localhost:4001/${item.image}`;
        }}
        className="w-72 h-72 object-cover rounded-xl mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{item?.name || "Unnamed Item"}</h1>
      <p className="text-lg mb-1">Price: ₹{item?.price ?? "N/A"}</p>
      <p className="text-gray-600 mb-4">Location: {item?.location || "Unknown"}</p>
      <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600">
        Add to Cart
      </button>
    </div>
  );
}

export default Item_details;