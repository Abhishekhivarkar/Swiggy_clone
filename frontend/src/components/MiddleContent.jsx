import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FoodApi from "../data/FoodApi.json" 
function MiddleContent() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:4001/food");
        console.log("Data received from 127.0.0.1");
        setFood(res.data);
      } catch (err1) {
        console.warn("Error with 127.0.0.1:", err1.message);

        try {
          const res = await axios.get("http://localhost:4001/food");
          console.log("Data received from localhost");
          setFood(res.data);
        } catch (err2) {
          console.error("Error with localhost:", err2.message);
          setFood(FoodApi)
        }
      }
    };

    fetchFood();
  }, []);

  function slideRight() {
    if (slide < food.length - 6) setSlide(slide + 1);
  }

  function slideLeft() {
    if (slide > 0) setSlide(slide - 1);
  }

  const handleClick = (id) => {
    navigate(`/food/${id}`);
  };

  return (
    <div className="max-w-[800px] mx-auto z-0">
      <div className="flex mt-4 items-center">
        <div className="font-bold">What's on your mind?</div>
        <div className="flex gap-3 ml-auto">
          <div
            className="rounded-full bg-[#D8D9DB] h-8 w-8 flex items-center justify-center cursor-pointer"
            onClick={slideLeft}
          >
            <FaArrowLeft />
          </div>
          <div
            className="rounded-full bg-[#D8D9DB] h-8 w-8 flex items-center justify-center cursor-pointer"
            onClick={slideRight}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden z-0">
        {food && food.length > 0 ? (
          food.map((data, index) => (
            <div
              key={data._id}
              className="mt-6 w-[90px] shrink-0 m-3 duration-500"
              style={{
                transform: `translateX(-${slide * 100}px)`,
              }}
            >
              <img
                src={data.image}
                alt={data.name}
                onClick={() => handleClick(data._id)}
                className="cursor-pointer rounded-lg"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-4">No food items found.</p>
        )}
      </div>

      <hr className="my-6 border-[1px]" />
    </div>
  );
}

export default MiddleContent;