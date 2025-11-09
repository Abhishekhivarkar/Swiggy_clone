import {useState,useEffect} from "react"
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import {useNavigate} from "react-router-dom"
import FoodApi2 from "../data/FoodApi2.json" 
import axios from "axios"
function SecondMiddleContent(){
  const navigate = useNavigate()
  const [restaurant,setRestaurants] = useState([])
  const [slide,setSlide] = useState(0)
  
  function slideRight(){
    if (restaurant.length - 5 == slide) return false
    console.log("Right")
    console.log(restaurant.length)
    setSlide(slide + 1)
  }
  
  function slideLeft(){
    if (slide == 0) return false
    console.log("Left")
    setSlide(slide - 1)
  }
  useEffect(()=>{
    const fetchRestaurants =async () => {
      try{
        const res =await axios.get("http://127.0.0.1:4001/restaurant")
        console.log("data received successfully")
        setRestaurants(res.data)
      }catch(err){
        console.error("Error : ",err.message)
        try{
      const res =await axios.get("http://localhost:4001/restaurant")
      console.log("data recoeived from localhost")
      setRestaurants(res.data)
    }catch(err){
      console.log("Error : ",err)
         setRestaurants(FoodApi2)
      }
    }
    }
    fetchRestaurants()
  },[])
  const handleClick=(id)=>{
    navigate(`/restaurant/${id}`)
  }
  return(
    <>
        <div className="max-w-[800px]  mx-auto z-0">
        
        <div className="flex mt-4">
          <div className="font-bold ">Top restaurant chains in Pune</div>
          
          <div className="flex gap-3 ml-auto">
    <div className="rounded-full bg-[#D8D9DB] h-8 w-8 flex items-center justify-center"
    onClick={slideLeft}
    >
      <FaArrowLeft/>
      </div>
    
        <div className="rounded-full bg-[#D8D9DB] h-8 w-8 flex items-center justify-center" onClick={slideRight} >
          
          <FaArrowRight/>
        </div>
        
      </div>
      </div>
      
      <div className="flex z-0 overflow-hidden mt-4">
        {
          restaurant.map((data,index)=>{
          return(
            <div key={data.id} className=" shrink-0 mx-3 duration-[500ms] max-w-[200px]"
            style={
              {
                transform : `translate(-${slide * (100)}%)`
                
              }
                 }
            >
              <div>
              <img className="w-[200px] h-[130px] rounded-lg object-cover" src={data.Image} onClick={()=>handleClick(data._id)}></img>
              </div>
              <div className="mt-2">
             <p className="font-bold">{data.name}</p>
            
            <div className="flex ">
             <FcRating className="mt-1 mr-1"/>
              <p>{data.rating}</p>
            </div>
              
              <p>{data.location}</p>
              </div>
            </div>
            )
          })
          
        }
        
        
      </div>
      
      <hr className="my-6 border-[1px]"></hr>
      </div>
    </>
    )
  
}
export default SecondMiddleContent