import {useState,useEffect} from "react"
import CityCard from "./CityCard"
function Places(){
  const [city,setCity] = useState([])
  function FetchApi(){
    fetch("/City.json")
    .then((e)=>e.json())
    .then((data)=>{
      setCity(data)
    })
    
  }
  useEffect(()=>{
      FetchApi()
    },[])
  return(
    <>
       <div className="max-w-[750px]  mx-auto z-0">
        <div className="font-bold mt-10">Restaurants with online food delivery in Pune</div>
        <div className="grid grid-cols-4 gap-3 mt-8">
        {
          city.map((data,index)=>{
          return(
            <CityCard {...data} key={index}/>
            )
          })
        }
        </div>
        </div>
    </>
    )
}
export default Places