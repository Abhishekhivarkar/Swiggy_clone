import Card from "./Card"
import { LuSettings2 } from "react-icons/lu";
import {useState,useEffect} from "react"
import { RxCaretDown } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import axios from "axios"
import {useNavigate } from "react-router-dom"
import TopRestaurants from "../data/TopRestaurants.json"
function ThirdMiddleContent(){
  const [ResImages,setResImages] = useState([])
  const [toggle,setToggle]  = useState(false)
  const [toggle2,setToggle2]  = useState(false)
 const navigate = useNavigate()
  
   useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:4001/restaurant");
        console.log("Data received from 127.0.0.1");
        setResImages(res.data);
      } catch (err1) {
        console.log("Error (127.0.0.1):", err1.message);

        try {
          const res = await axios.get("http://localhost:4001/restaurant");
          console.log("Data received from localhost");
          setResImages(res.data);
        } catch (err2) {
          console.log("Error (localhost):", err2.message);
          console.log("Loading data from local JSON file...");
          setResImages(TopRestaurants); // fallback to local JSON
        }
      }
    };

    fetchData();
  }, []);

  
  function filterToggle(){
    setToggle(true)
    console.log(toggle)
  }
  function filterToggleFalse(){
    setToggle(false)
    console.log(toggle)
  }
  
  function filterToggle2(){
    setToggle2(true)
    
  }
  function filterToggleFalse2(){
    setToggle2(false)
    
  }
  const handleClick=(id)=>{
    navigate(`/restaurant/${id}`)
  }
  
  return(
    <>
    <div className="black-overlay h-full w-full z-[50] inset-0 fixed flex justify-center items-center duration-500"
    style={
      {
        opacity:toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden"
        
      }
      
    }
    >
      <div className="bg-white h-[500px] w-[400px] rounded-lg duration-600 absolute flex flex-col p-5" >
        
        
        <div className="flex justify-center items-center">
          <p className="font-bold text-[20px]">Filter</p>
        <RxCross2 className="ml-auto text-[30px]"onClick={filterToggleFalse}/>
        </div>
        
        
        <hr className="mt-5 border-[1px]"></hr>
       
       
        <div className="flex flex-1">
        
        <div className="border-r-2 border-gray-300 w-[150px] flex flex-col [&>*]:my-[9px] flex-1 font-medium">
          
          <p>Sort</p>
          <p>99store</p>
           <p>Food in 10 mins</p>
          <p>Offers</p>
          <p>Ratings</p>
          <p>Cost for two</p>
         <p>Veg/Non-veg</p>
          <p>Cuising</p>
         
        </div>
        
        <div className="flex-1 pl-3 pt-1">
        <p>Sort by</p>
        {/* right side items */}
        <div className="flex flex-col [&>*]:my-3">
          
            <div className="flex">
          <input type="radio"id="1" name="Filter"/>
        <label htmlFor="1" className="ml-2">Relavence</label>
        </div>
          
          <div className="flex">
           <input type="radio"id="2" name="Filter"/>
          <label htmlFor="2" className="ml-2">Delivery Time</label>
          </div>
          
          <div className="flex">
          <input type="radio"id="3" name="Filter"/>
          <label htmlFor="3" className="ml-2">Rating</label>
          </div>
          
           <div className="flex">
           <input type="radio"id="4" name="Filter"/>
          <label htmlFor="4"className="ml-2">Cost:Low to High</label>
          </div>
          
           <div className="flex">
          <input type="radio"id="5"name="Filter"/>
          <label htmlFor="5"className="ml-2">Cost:High to Low</label>
          </div>
          
        </div>
        </div>
        
        </div>
        
        
        <div className="h-10 bg-[#F6F6F8] mt-auto flex justify-between items-center p-4 py-8">
          <div className="text-[#9FA0A6] font-medium">Clear Filters</div>
          <div className="bg-[#DEDDE3] px-5 py-2 rounded-lg font-medium text-[#9FA0A6]">Apply</div>
          
        </div>
        
      </div>
      
      
    </div>
    
    {/* second black overlay*/}
    
    <div className = "black-overlay inset-0 z-[50] fixed h-full w-full flex justify-center items-center duration-500"style={
      {
        opacity:toggle2 ? 1 : 0,
        visibility: toggle2 ? "visible" : "hidden"
      }
    }>
      <div className="h-80 w-60 bg-white rounded-lg absolute duration-600">
        <div className="ml-auto flex flex-col " onClick={filterToggleFalse2}>
         <RxCross2 className="m-3"/>
        </div>
        <hr className="border-[1px]"></hr>
         <div className="flex flex-col [&>*]:my-3 justify-center ml-4">
          
            <div className="flex">
          <input type="radio"id="01" name="Filter"/>
        <label htmlFor="01" className="ml-2">Relavence</label>
        </div>
          
          <div className="flex">
           <input type="radio"id="02" name="Filter"/>
          <label htmlFor="02" className="ml-2">Delivery Time</label>
          </div>
          
          <div className="flex">
          <input type="radio"id="03" name="Filter"/>
          <label htmlFor="03" className="ml-2">Rating</label>
          </div>
          
           <div className="flex">
           <input type="radio"id="04" name="Filter"/>
          <label htmlFor="04"className="ml-2">Cost:Low to High</label>
          </div>
          
           <div className="flex">
          <input type="radio"id="05"name="Filter"/>
          <label htmlFor="05"className="ml-2">Cost:High to Low</label>
          </div>
          
        </div>
      </div>
      
    </div>
    
    
      {/* second black overlay ends*/}
      <div className="max-w-[800px]  mx-auto z-0" >
        <div className="font-bold">Restaurants with online food delivery in Pune</div>
        
        
        <div className="mt-6 flex gap-2">
          
          <div className="gap-1 flex items-center justify-center border border-black rounded-full py-2 px-3"onClick={filterToggle}>
            <p >Filter</p>
            <LuSettings2/>
          </div>
          
           <div className="gap-1 flex items-center justify-center border border-black rounded-full py-2 px-3" onClick={filterToggle2}>
            <p>Sort By</p>
            <RxCaretDown/>
          </div>
          
          <div className="gap-1 flex items-center justify-center border border-black rounded-full py-2 px-3">
            <p>Ratings 4.0 +</p>
            
          </div>
          
           <div className="gap-1 flex items-center justify-center border border-black rounded-full py-2 px-3">
            <p>Pure Veg</p>
          </div>
          
           <div className="gap-1 flex items-center justify-center border border-black rounded-full py-2 px-3">
            <p>Offers</p>
          </div>
          
          <div className="gap-1 flex items-center justify-center border border-black rounded-full py-2 px-3">
            <p>Rs.300-Rs.600</p>
          </div>
          
           <div className="gap-1 flex items-center justify-center border border-black rounded-full py-2 px-3">
            <p>Less than Rs.300</p>
          </div>
          
        </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg-grid-cols-4 gap-4 mt-7" >
             {
        ResImages.map((data,index)=>(
        <div onClick={()=>handleClick(data._id)} key={data._id}>
          <Card {...data}  />
          </div>
      
          ))  
        
      }
            
          </div>
           
            
        
        
      </div>
    
    </>
    )
  
}
export default ThirdMiddleContent