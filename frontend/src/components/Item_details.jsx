import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import TopRestaurants from "../data/TopRestaurants.json";
import TopFoods from "../data/FoodApi.json";

function Item_details() {
  const { id } = useParams();
  const location = useLocation();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fallback: Extract ID from pathname if useParams fails
  const extractIdFromPathname = (pathname) => {
    const segments = pathname.split('/');
    return segments[segments.length - 1]; // Get last segment
  };

  const effectiveId = id || extractIdFromPathname(location.pathname);

  useEffect(() => {
    const fetchItem = async () => {
      if (!effectiveId) {
        console.error("No ID found");
        setLoading(false);
        return;
      }

      console.log("Using ID:", effectiveId);
      
      const isRestaurant = location.pathname.startsWith("/restaurant");
      const endpoint = isRestaurant ? `restaurant/${effectiveId}` : `food/${effectiveId}`;

      let loaded = false;

      // Try API first
      for (const base of ["http://127.0.0.1:4001", "http://localhost:4001"]) {
        try {
          const res = await axios.get(`${base}/${endpoint}`);
          setItem(res.data);
          loaded = true;
          console.log(`Loaded from API: ${base}`);
          break;
        } catch (err) {
          console.warn(`API failed from ${base}: ${err.message}`);
        }
      }

      // Fallback to local JSON if API fails
      if (!loaded) {
        console.warn("API failed, loading from local JSON...");
        
        const fallbackData = isRestaurant ? TopRestaurants : TopFoods;
        const foundItem = fallbackData.find(i => String(i.id) === String(effectiveId));

        if (foundItem) {
          setItem(foundItem);
          console.log("Loaded from local JSON:", foundItem);
        } else {
          console.error("Item not found in local JSON");
          setItem(null);
        }
      }

      setLoading(false);
    };

    fetchItem();
  }, [effectiveId, location.pathname]);

  if (loading) return <div className="p-6 text-center text-gray-500">Loading...</div>;
  if (!item) return <div className="p-6 text-center text-gray-500">Item not found.</div>;

  return (
    <div className="p-6 flex flex-col items-center h-full">
      <img
        src={item.image || "/fallback-image.png"}
        alt={item.name}
        onError={(e) => (e.target.src = "/fallback-image.png")}
        className="w-72 h-72 object-cover rounded-xl mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
      <p className="text-lg mb-1">Price: ₹{item.price ?? "N/A"}</p>
      <p className="text-gray-600 mb-4">Location: {item.location || "Unknown"}</p>
      <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600">
        Add to Cart
      </button>
    </div>
  );
}

export default Item_details;